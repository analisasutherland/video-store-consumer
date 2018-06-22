import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import Movie from './Movie';
import Rental from './Rental';

const BASE_URL = 'http://localhost:3000/'

class RentalLibrary extends Component {

  constructor() {
    super();
    this.state = {
      library: [],
      selectedCustomer: "",
      selectedMovie: ""
    };
  }

  componentDidMount() {
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

  movieSelection = (index, id) =>{

    let updatedMovie = this.state.library[index];
    console.log(updatedMovie);


    this.setState({selectedMovie: updatedMovie})
    console.log(updatedMovie);
  }

  render() {
    const libraryResults = this.state.library.map((result, index) => {
      return <Movie
      key={index}
      index={index}
      title={result.title}
      overview={result.overview}
      releaseDate={result.release_date}
      image={result.image_url}
      id={result.id}
      movieSelectionCallback={this.movieSelection}
      />
    });
    return(
      <div>
        <Rental title={this.state.selectedMovie.title}/>
        <p> { libraryResults }</p>
      </div>
    );
  }
}

export default RentalLibrary;
