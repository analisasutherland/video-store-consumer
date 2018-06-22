import React, { Component } from 'react';
import './VideoStore.css'

import {
  Route,
  NavLink,
  HashRouter,
} from "react-router-dom";

import Movie from './Movie';
import CustomerList from './CustomerList';
import MovieSearchForm from './MovieSearchForm';
import RentalLibrary from './RentalLibrary';
import Rental from './Rental';

class VideoStore extends Component {
  // TODO: Dry up this section using the same Movie Component code
  constructor() {
    super();
    this.state = {
      selectedMovie: "",
      selectedCustomer: ""
    };
  }

  customerSelection = (name, id) => {
    let updatedCustomer = name;
    console.log(updatedCustomer);
    console.log(id);

    this.setState({ selectedCustomer: updatedCustomer })

    console.log(updatedCustomer);
  }

  movieSelection = (title) =>{

    let updatedMovie = title;
    console.log(updatedMovie);

    this.setState({selectedMovie: updatedMovie})
    console.log(updatedMovie);
  }

  render(){
    return (
      <HashRouter>
      <div >
      <h1 className="header__text"> Ol Skool VideoStore!!!!!
      </h1>

      <ul className="header__text">
      <li>
      <NavLink to="/"> Main Page </NavLink>
      </li>
      <li>
      <NavLink to="/search"> Search </NavLink>
      </li>
      <li>
      <NavLink to="/library"> Library </NavLink>
      </li>
      <li>
      <NavLink to="/customers"> Customers </NavLink>
      </li>
      </ul>
      <div>
      <h4>Selected movie: {this.state.selectedMovie}</h4>
      <h4>Selected Customer: {this.state.selectedCustomer} </h4>
      </div>
      <div className="content">
      <Route
      path="/search"
      render={ () => (
        <MovieSearchForm
        />
      )}
      />
      <Route
      path="/library"
      render={ () => (
        <RentalLibrary
        passSelectedMovieCallback={this.movieSelection}
        />
      )}
      />
      <Route
      path="/customers"
      render={ () => (
        <CustomerList
        passSelectedCustomerCallback={this.customerSelection}
        />
      )}
      />
      </div>

      </div>
      </HashRouter>
    );
  }

}


export default VideoStore;
