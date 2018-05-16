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
		var hasil = null;
		if(this.props.check1 === true && this.props.check2 === true && this.props.check3 === true){
			hasil = parseFloat(this.props.in1, 10) + parseFloat(this.props.in2, 10) + parseFloat(this.props.in3, 10);
		} else if(this.props.check1 === false && this.props.check2 === true && this.props.check3 === true){
			hasil = parseFloat(this.props.in2, 10) + parseFloat(this.props.in3, 10);
		} else if(this.props.check1 === true && this.props.check2 === false && this.props.check3 === true){
			hasil = parseFloat(this.props.in1, 10) + parseFloat(this.props.in3, 10);
		} else if(this.props.check1 === true && this.props.check2 === true && this.props.check3 === false){
			hasil = parseFloat(this.props.in1, 10) + parseFloat(this.props.in2, 10);
		} else {
			alert('There must be an error with your input!');
		}

		if(isNaN(hasil)){
			alert('Input must not be empty!');
		} else {
			this.setState({result: {hasil}});
			item.push('The result is: ' + hasil);
		}
	}

	substraction() {
		var hasil = null;
		if(this.props.check1 === true && this.props.check2 === true && this.props.check3 === true){
			hasil = parseFloat(this.props.in1, 10) - parseFloat(this.props.in2, 10) - parseFloat(this.props.in3, 10);
		} else if(this.props.check1 === false && this.props.check2 === true && this.props.check3 === true){
			hasil = parseFloat(this.props.in2, 10) - parseFloat(this.props.in3, 10);
		} else if(this.props.check1 === true && this.props.check2 === false && this.props.check3 === true){
			hasil = parseFloat(this.props.in1, 10) - parseFloat(this.props.in3, 10);
		} else if(this.props.check1 === true && this.props.check2 === true && this.props.check3 === false){
			hasil = parseFloat(this.props.in1, 10) - parseFloat(this.props.in2, 10);
		} else {
			alert('There must be an error with your input!');
		}

		if(isNaN(hasil)){
			alert('Input must not be empty!');
		} else {
			this.setState({result: {hasil}});
			item.push('The result is: ' + hasil);
		}
	}

	multiplication() {
		var hasil = null;
		if(this.props.check1 === true && this.props.check2 === true && this.props.check3 === true){
			hasil = parseFloat(this.props.in1, 10) * parseFloat(this.props.in2, 10) * parseFloat(this.props.in3, 10);
		} else if(this.props.check1 === false && this.props.check2 === true && this.props.check3 === true){
			hasil = parseFloat(this.props.in2, 10) * parseFloat(this.props.in3, 10);
		} else if(this.props.check1 === true && this.props.check2 === false && this.props.check3 === true){
			hasil = parseFloat(this.props.in1, 10) * parseFloat(this.props.in3, 10);
		} else if(this.props.check1 === true && this.props.check2 === true && this.props.check3 === false){
			hasil = parseFloat(this.props.in1, 10) * parseFloat(this.props.in2, 10);
		} else {
			alert('There must be an error with your input!');
		}

		if(isNaN(hasil)){
			alert('Input must not be empty!');
		} else {
			this.setState({result: {hasil}});
			item.push('The result is: ' + hasil);
		}
	}

	division() {
		var hasil = null;
		if(this.props.check1 === true && this.props.check2 === true && this.props.check3 === true){
			hasil = parseFloat(this.props.in1, 10) / parseFloat(this.props.in2, 10) / parseFloat(this.props.in3, 10);
		} else if(this.props.check1 === false && this.props.check2 === true && this.props.check3 === true){
			hasil = parseFloat(this.props.in2, 10) / parseFloat(this.props.in3, 10);
		} else if(this.props.check1 === true && this.props.check2 === false && this.props.check3 === true){
			hasil = parseFloat(this.props.in1, 10) / parseFloat(this.props.in3, 10);
		} else if(this.props.check1 === true && this.props.check2 === true && this.props.check3 === false){
			hasil = parseFloat(this.props.in1, 10) / parseFloat(this.props.in2, 10);
		} else {
			alert('There must be an error with your input!');
		}

		if(isNaN(hasil)){
			alert('Input must not be empty!');
		} else {
			this.setState({result: {hasil}});
			item.push('The result is: ' + hasil);
		}
	}

	render() {
		console.log(this.props);
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