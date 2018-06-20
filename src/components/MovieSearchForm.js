import React, { Component } from 'react';
import PropTypes from 'prop-types'

class MovieSearchForm extends Component {
  static propTypes = {
    searchMovieCallback: PropTypes.func.isRequired
  }

  constructor() {
    super();
    this.state = {
      query: ""
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

    this.props.searchMovieCallback(this.state);
    console.log(this.state);
    this.setState({
      query: ''
    });
  }

  render() {
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
      </div>
    );
  }
}

export default MovieSearchForm;
