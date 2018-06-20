import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import {
  Route,
  NavLink,
  HashRouter,
} from "react-router-dom";

import Movie from './Movie';
import Customer from './Customer';
import MovieSearchForm from './MovieSearchForm';
import RentalLibrary from './RentalLibrary';

const BASE_URL = 'http://localhost:3000/'

class VideoStore extends Component {
  constructor(){
    super();
    this.state = {
      results: [],
      library: []
    };
  }

  viewLibrary = () => {
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

  searchMovie = (query) => {
    console.log(query);
    let searchURL = BASE_URL + `/movies?query=${query.query}`
    axios.get(searchURL)
    .then((response) => {
      console.log('Success');
      console.log(response.data);
      this.setState({results: response.data});
      console.log(this.state.results);
    })

    .catch((error) => {
      // TODO: include Status Message using Status Component
      // this.props.updateStatusCallback('Search Error', 'error');
      console.log(error);
    });
  }

  // TODO: Dry up this section using the same Movie Component code
  render(){
    const results = this.state.results.map((result,index) =>{
      return <Movie
        key={index}
        index={index}
        title={result.title}
        overview={result.overview}
        releaseDate={result.release_date}
        image={result.image_url}
      />
    });
    //
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
                <MovieSearchForm searchMovieCallback={this.searchMovie} />
              )}
            />
            <Route
              path="/library"
              render={ () => (
                <RentalLibrary
                  viewLibraryCallback={this.viewLibrary}
                />
              )}
            />
            <Route
              path="/customers"
              render={ () => (<Customer />) }
            />
          </div>

          { libraryResults }
          { results }
        </div>

      </HashRouter>
    );
  }

}


export default VideoStore;
