import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import Customer from './Customer';
import Movie from './Movie';

const BASE_URL = 'http://localhost:3000/'

class NewRentalManager extends Component {
  constructor() {
    super();
    this.state -= {
      checkoutDate: "",
    };
  }

  createRental = (movie, customer) => {
    event.preventDefault();
    let newURL = BASE_URL + `/rentals/${this.props.title}/check-out`

    axios.post(newURL)
    .then((response) => {
      console.log('Success');
      console.log(response.data)
      this.setState({checkoutDate: response.date})
    })

    .catch((error) => {
      console.log(error);
    });
  }
}

  render() {
    return(
      <Rental
      createRentalCallback={this.createRental}
      />
    );
  }
}
export default NewRentalManager
