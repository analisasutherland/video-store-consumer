import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import Movie from './Movie';
import Rental from './Rental';

const BASE_URL = 'http://localhost:3000/'

class RentalLibrary extends Component {
  static propTypes = {
    passSelectedMovieCallback: PropTypes.func,
    title: PropTypes.string
  }

  constructor() {
    super();
    this.state = {
      library: []
    };
  }

  passSelectedMovie = () => {
    this.props.passSelectedMovieCallback(this.props.title)
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
      movieSelectionCallback={this.props.passSelectedMovieCallback}
      />
    });
    return(
      <div>
        <Rental title={this.props.title}/>
        <p> { libraryResults }</p>
      </div>
    );
  }
}

export default RentalLibrary;
