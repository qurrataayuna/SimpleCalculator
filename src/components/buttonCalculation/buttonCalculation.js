import React, { Component } from 'react';
import './css/buttonCalculation.css';

var item = [];
class ButtonCalculation extends Component {
	constructor() {
		super();
		this.state = {
			result: ''
		}

		this.addition = this.addition.bind(this);
		this.substraction = this.substraction.bind(this);
		this.multiplication = this.multiplication.bind(this);
		this.division = this.division.bind(this);
	}

	addition() {
		var a = parseInt(this.props.in1, 10);
		var b = parseInt(this.props.in2, 10);
		var c = parseInt(this.props.in3, 10);
		var hasil = a+b+c;
		this.setState({result: {hasil}});
		item.push('The result is: ' + hasil);
	}

	substraction() {
		var a = parseInt(this.props.in1, 10);
		var b = parseInt(this.props.in2, 10);
		var c = parseInt(this.props.in3, 10);
		var hasil = a-b-c;
		this.setState({result: {hasil}});
		item.push('The result is: ' + hasil);
	}

	multiplication() {
		var a = parseInt(this.props.in1, 10);
		var b = parseInt(this.props.in2, 10);
		var c = parseInt(this.props.in3, 10);
		var hasil = a*b*c;
		this.setState({result: {hasil}});
		item.push('The result is: ' + hasil);
	}

	division() {
		var a = parseInt(this.props.in1, 10);
		var b = parseInt(this.props.in2, 10);
		var c = parseInt(this.props.in3, 10);
		var hasil = a/b/c;
		this.setState({result: {hasil}});
		item.push('The result is: ' + hasil);
	}

	render() {
		return(
			<div className='buttonCalculation'>
				<button onClick={this.addition} >
					<p>+</p>
				</button>
				<button onClick={this.substraction} >
					<p>-</p>
				</button>
				<button onClick={this.multiplication} >
					<p>x</p>
				</button>
				<button onClick={this.division} >
					<p>/</p>
				</button>

				<div className='resultCalculation'>
					<h3>{item[item.length-1]}</h3>
				</div>
			</div>
		);
	}
}

export default ButtonCalculation;