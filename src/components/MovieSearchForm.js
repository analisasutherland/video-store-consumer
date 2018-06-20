import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import axios from 'axios';

import Movie from './Movie';

const BASE_URL = 'http://localhost:3000/'


class MovieSearchForm extends Component {
  constructor() {
    super();
    this.state = {
      query: "",
      results: []
    };
  }

  onInputChange = (event) => {
    const key = event.target.name;
    let value = event.target.value;

    let updatedInput = {};
    updatedInput[key] = value;

    console.log(this.state);
    this.setState(updatedInput);
  }

  onFormSubmit = (event) => {
    event.preventDefault();
    console.log("form submit");
    console.log(this.state);

    let searchURL = BASE_URL + `/movies?query=${this.state.query}`

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

    this.setState({
      query: ''
    });
  }
  
  render() {
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
    return(
      <div>
        <form onSubmit={this.onFormSubmit} className='movie-search-bar'>
          <input
          type="text"
          name="query"
          placeholder="enter search word"
          onChange={this.onInputChange}
          value={this.state.query}
        />
          <input type="submit"/>
      </form>
        <div className="search-results">
          { results }
        </div>
      </div>
    );
  }
}

export default MovieSearchForm;
