import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import axios from 'axios';

import Movie from './Movie';
import Customer from './Customer';

class VideoStore extends Component {
  render(){
    return(
      <div>
        <Movie />
        <Customer />
      </div>
    );
  }

}


export default VideoStore;
