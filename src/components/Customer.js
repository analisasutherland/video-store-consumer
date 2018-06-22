import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Customer extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    phone: PropTypes.string,
    account_credit: PropTypes.number,
    id: PropTypes.number,
    index: PropTypes.number,
    customerSelectionCallback: PropTypes.func
  }

  onButtonClick = (event) => {
    console.log("Customer Button Clicked");
    let index = event.target.value;
    let id = event.target.id;
    console.log(index);
    console.log(id);

    this.props.customerSelectionCallback(index, id);
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
      <button
      onClick={this.onButtonClick}
      type="button"
      id={this.props.id}
      value={this.props.index}
      >Select for Rental</button>
      </section>
      </div>
    );
  }
}

export default Customer;
