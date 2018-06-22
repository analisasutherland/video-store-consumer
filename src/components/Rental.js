import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import "./Rental.css";

import Movie from './Movie';
import Customer from './Customer';

class Rental extends Component {
  static propTypes = {
    index: PropTypes.number,
    title: PropTypes.string.isRequired,
    id: PropTypes.number,
    name: PropTypes.string,
    createRentalCallback: PropTypes.func
  }

  onClick = (event) => {
    console.log('Creating a Rental');
    let movie = event.target.title;
    let customer = event.target.name;
    let customerId = event.target.id;

    console.log(customerId);
    this.props.createRentalCallback(movie, customerId);
  }


// TODO: Need to render the the state of rental selection.
  render(){
    return(
      <div className="rental-header">
        <button onClick={this.onClick} type='button' title="Create Rental">
          Create A Rental
        </button>
      </div>
    );
  }
}

export default Rental;
