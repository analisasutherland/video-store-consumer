import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import Movie from './Movie';
import Customer from './Customer';
import MovieSearchForm from './MovieSearchForm';
import RentalLibrary from './RentalLibrary';

const BASE_URL = 'http://localhost:3000/'

class VideoStore extends Component {
  constructor(){
    super();
    this.state = {
      results: [],
      library: []
    };
  }
  // componentDidMount() {
  //   // TODO: Build in statuses with a Status component
  //   // this.props.updateStatusCallback('Loading Movies....','success');
  //   axios.get()
  //   .then((response) => {
  //
  //   })
  //
  //   .catch((error) => {
  //
  //   });
  // }

  viewLibrary = () => {
    let libraryURL = BASE_URL + `movies`
    console.log(libraryURL)
    axios.get(libraryURL)
    .then((response) => {
      console.log('Success');
      console.log(response.data);
      const library = response.data
      this.setState({ library: library });
    })
    .catch((error) => {
      console.log(error);
    });
  }

  searchMovie = (query) => {
    console.log(query);
    let searchURL = BASE_URL + `/movies?query=${query.query}`
    axios.get(searchURL)
    .then((response) => {
      console.log('Success');
      console.log(response.data);
      this.setState({results: response.data});
      console.log(this.state.results);
    })

    .catch((error) => {
      // TODO: include Status Message using Status Component
      // this.props.updateStatusCallback('Search Error', 'error');
      console.log(error);
    });
  }

 // TODO: Dry up this section using the same Movie Component code
  render(){
    const results = this.state.results.map((result,index) =>{
      return <Movie
      key={index}
      index={index}
      title={result.title}
      overview={result.overview}
      releaseDate={result.release_date}
      image={result.image_url}
      />
    });
    //
    const libraryResults = this.state.library.map((result, index) => {
      return <Movie
      key={index}
      index={index}
      title={result.title}
      overview={result.overview}
      releaseDate={result.release_date}
      image={result.image_url}
      />
    });
    return (
      <div>
      <MovieSearchForm searchMovieCallback={this.searchMovie} />
      <Customer />
      <RentalLibrary
      viewLibraryCallback={this.viewLibrary}
      />
      { libraryResults }
      { results }
      </div>
    );
  }

}


export default VideoStore;
