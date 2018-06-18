import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Movie extends Component {
  render(){
    return(
      <div>
        <form>
          <input
            type="text"
            name="query"
            placeholder="enter search word"  />
            <input type="submit"/>
        </form>
      </div>
    );
  }
}

export default Movie;
