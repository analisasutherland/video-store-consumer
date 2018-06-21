import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import Movie from './Movie';

class Rental extends Component {
  static propTypes = {

  }

  constructor() {
    super();
    this.state = {
      selectedCustomer: "",
      selectedMovie: ""
    };
  }

  movieSelection = (index, id) =>{
    let updatedMovie = this.state.selectedMovie;
    console.log(updatedMovie);
  }
// TODO: Need to render the the state of rental selection.
  render(){
    return(
      <div>
        <Movie movieSelectionCallback={this.movieSelection}/>
      </div>
    );
  }
}

export default Rental;
