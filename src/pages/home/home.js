import React, { Component } from 'react';
import Header from '../../components/header/header';
import Calculator from '../../components/calculator/calculator';
import './css/home.css';

class Home extends Component {
  render() {
    return (
    	<div>
	    	<Header />
	    	<Calculator />
    	</div>
    );
  }
}

export default Home;
