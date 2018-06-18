import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Movie extends Component {
  render(){
    return(
      <div>
        <form className='movie-search-bar'>
          <input
            type="text"
            name="query"
            placeholder="enter search word"  />
            <input type="submit"/>
        </form>
        <div className='movie-library-link'>
          <a href='#'>Movie Library</a>
        </div>
      </div>
    );
  }
}

export default Movie;
