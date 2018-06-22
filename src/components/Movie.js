import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Movie.css';

class Movie extends Component {
  static propTypes = {
    index: PropTypes.number,
    title: PropTypes.string.isRequired,
    overview: PropTypes.string,
    releaseDate: PropTypes.string,
    image: PropTypes.string,
    id: PropTypes.number,
    movieSelectionCallback: PropTypes.func
  }

  onButtonClick = (event) => {
    console.log('movie button clicked');
    console.log(event.target.title);
    let title = event.target.title;
    // let id = event.target.id;
    console.log(title);

    this.props.movieSelectionCallback(title);
  }

  render(){
    return(
      <div className="results">
        <section className="results__content">
          <div>
            <h3>{this.props.title}</h3>
            <p>Release date: {this.props.releaseDate}</p>
            <button onClick={this.onButtonClick} type="button"
              title={this.props.title}
              >Rent This Movie</button>
          </div>
          <div>
            <img className="movie-image" src={this.props.image} height="250" width="200"/>
          </div>
          <div>
            <h3>Overview</h3>
            <p className="results__content-text">{this.props.overview}</p>
          </div>
        </section>
        </div>
      );
    }
  }

  export default Movie;
