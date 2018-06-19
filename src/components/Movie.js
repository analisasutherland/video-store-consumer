import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Movie extends Component {
  static propTypes = {
    index: PropTypes.number,
    title: PropTypes.string.isRequired,
    overview: PropTypes.string,
    releaseDate: PropTypes.string,
    image: PropTypes.string,
  }

  render(){
    return(
      <div>
      <section className="results-content">
      <h2>{this.props.title}</h2>

      <div className="movie-image">
      <img src={this.props.image} />
      </div>

      <p>{this.props.releaseDate}</p>
      <p>{this.props.overview}</p>
      </section>
      <div className='movie-library-link'>
      <a href='#'>Movie Library</a>
      </div>
      </div>
    );
  }
}

export default Movie;
