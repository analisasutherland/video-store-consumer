import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import Movie from './Movie';

class Rental extends Component {
  static propTypes = {
    index: PropTypes.number,
    title: PropTypes.string.isRequired,
    id: PropTypes.number,
  }


// TODO: Need to render the the state of rental selection.
  render(){
    return(
      <div>
        <h3>Selected movie:{this.props.title}</h3>
        <h3>Selected Customer: </h3>

      </div>
    );
  }
}

export default Rental;
