import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Customer extends Component {

  static propTypes = {
    name: PropTypes.string.isRequired,
    phone: PropTypes.string,
    account_credit: PropTypes.number,
  }

  render(){

    return(
      <div className="customer-list-link">
        <section>
          <h2>
            {this.props.name}
          </h2>
          <p>
            {this.props.phone}
          </p>
          <button type="button">Select for Rental</button>
        </section>
      </div>
    );
  }
}

export default Customer;
