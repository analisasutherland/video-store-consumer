import React, { Component } from 'react';
import PropTypes from 'prop-types';

class RentalLibrary extends Component {
  static propTypes = {
    viewLibraryCallback: PropTypes.func.isRequired
  }

  onLinkClick = (event) => {
    event.preventDefault();
    console.log('Link Clicked');
    this.props.viewLibraryCallback();
  }

  render() {
    return(
      <div className='movie-library-link'>
      <a onClick={this.onLinkClick} href='#'>Rental Library</a>
      </div>
    );
  }
}

export default RentalLibrary;
