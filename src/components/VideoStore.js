import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import axios from 'axios';

import {
  Route,
  NavLink,
  HashRouter,
} from "react-router-dom";

// import Movie from './Movie';
import CustomerList from './CustomerList';
import MovieSearchForm from './MovieSearchForm';
import RentalLibrary from './RentalLibrary';

class VideoStore extends Component {
  // TODO: Dry up this section using the same Movie Component code
  render(){
    return (
      <HashRouter>
      <div >
      <h1>VideoStore!!!!!</h1>

      <ul className="header">
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
        />
      )}
      />
      <Route
      path="/customers"
      render={ () => (<CustomerList />) }
      />
      </div>
      </div>
      </HashRouter>
    );
  }

}


export default VideoStore;
