import React, { Component } from 'react';
import './css/header.css';

class Header extends Component {
	render() {
		return(
			<div className="Header">
				<div className="navbar">
					<h1>Simple Calculator</h1>
				</div>
			</div>
		);
	}
}

export default Header;