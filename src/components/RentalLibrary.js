import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import Movie from './Movie';

const BASE_URL = 'http://localhost:3000/'

class RentalLibrary extends Component {
  static propTypes = {
    index: PropTypes.number,
    title: PropTypes.string,
    overview: PropTypes.string,
    releaseDate: PropTypes.string,
    image: PropTypes.string
  }

  constructor() {
    super();
    this.state = {
      library: []
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

  render() {
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
    return(
      <div className='movie-library-link'>
      { libraryResults }
      </div>
    );
  }
}

export default RentalLibrary;
