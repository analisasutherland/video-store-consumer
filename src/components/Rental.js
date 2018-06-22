import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import "./Rental.css";

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
      <div className="rental-header">
        <h4>Selected movie: {this.props.title}</h4>
        <h4>Selected Customer: </h4>

      </div>
    );
  }
}

export default Rental;
