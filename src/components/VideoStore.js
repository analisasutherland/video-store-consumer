import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import Movie from './Movie';
import Customer from './Customer';

const BASE_URL = 'http://localhost:3000/'

class VideoStore extends Component {
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

  searchMovie = (query) => {
    console.log(query);
    let searchURL = BASE_URL + `/movies?query=${query.query}`
    axios.get(searchURL)
    .then((response) => {
      console.log('Success');
      console.log(response);
    })

    .catch((error) => {
      // TODO: include Status Message using Status Component
      // this.props.updateStatusCallback('Search Error', 'error');
      console.log(error);
    });
  }


  render(){
    return(
      <div>
      <Movie searchMovieCallback={this.searchMovie} />
      <Customer />
      </div>
    );
  }

}


export default VideoStore;
