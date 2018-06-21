import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Customer from './Customer';

const BASE_URL = 'http://localhost:3000/'

class CustomerList extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    phone: PropTypes.string,
    account_credit: PropTypes.number,
  }

  constructor(){
    super();
    this.state = {
      customerList: []
    };
  }

  componentDidMount(){
    let customerURL = BASE_URL + 'customers';

    axios.get(customerURL)
    .then((response) => {
      console.log(response);
      // console.log(response.data);

      let customerList = response.data;

      this.setState({customerList: customerList});
    })
    .catch((error) => {
      console.log(error);
    });
  }

  render() {
    const customerResults = this.state.customerList.map((result,index) => {
      return <Customer // TODO: CREATE A new customerlist component that will render a customer
      key={index}
      index={index}
      name={result.name}
      phone={result.phone}
      account_credit={result.account_credit}
    />
  });
  return (
    <div>
      {customerResults}
    </div>
  );
}
}

export default CustomerList;
