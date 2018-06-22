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
    let index = event.target.value;
    let id = event.target.id;

    this.props.movieSelectionCallback(index, id);
  }

  render(){
    //TODO: Build out functionality on 'Rent This Movie' button
    return(
      <div className="results">
        <section className="results__content">
          <div>
            <h3>{this.props.title}</h3>
            <p>{this.props.releaseDate}</p>
            <button onClick={this.onButtonClick} type="button"
              id={this.props.id}
              value={this.props.index}
              >Rent This Movie</button>
          </div>
          <div>
            <img className="movie-image" src={this.props.image} height="250" width="150"/>
          </div>
          <div>
            <h4>Movie Overview</h4>
            <p className="results__content-text">{this.props.overview}</p>
          </div>




        </section>

        </div>
      );
    }
  }

  export default Movie;
