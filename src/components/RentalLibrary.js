import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Movie from './Movie';

class RentalLibrary extends Component {
  static propTypes = {
    viewLibraryCallback: PropTypes.func.isRequired,
    index: PropTypes.number,
    title: PropTypes.string.isRequired,
    overview: PropTypes.string,
    releaseDate: PropTypes.string,
    image: PropTypes.string
  }

  onLinkClick = (event) => {
    event.preventDefault();
    console.log('Link Clicked');
    this.props.viewLibraryCallback(this.state);

  }

 // TODO: Dry up this portion, render just movies maybe?
  render() {
    return(
      <div className='movie-library-link'>
      <a onClick={this.onLinkClick} href='#'>Rental Library</a>

      </div>
    );
  }
}

export default RentalLibrary;
