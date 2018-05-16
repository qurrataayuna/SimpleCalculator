import React, { Component } from 'react';
import ButtonCalculation from '../buttonCalculation/buttonCalculation';
import './css/calculator.css';

class Calculator extends Component {
	constructor() {
		super();
		this.state = {
			valueInput1: 0,
			valueInput2: 0,
			valueInput3: 0,
		};
		this.handleChangeInput1 = this.handleChangeInput1.bind(this);
		this.handleChangeInput2 = this.handleChangeInput2.bind(this);
		this.handleChangeInput3 = this.handleChangeInput3.bind(this);

		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChangeInput1(e){
		this.setState({valueInput1: e.target.value});
		console.log(this.state.valueInput1);
	}
	
	handleChangeInput2(e){
		this.setState({valueInput2: e.target.value});
		console.log(this.state.valueInput2);
	}
	
	handleChangeInput3(e){
		this.setState({valueInput3: e.target.value});
		console.log(this.state.valueInput3);
	}

	handleSubmit(e){
		var x = this.state.valueInput1;
		var y = this.state.valueInput2;
		var z = this.state.valueInput3;
		alert('hasil ' + x + ' ' + y + ' ' + z);
		
	}

	render() {
		return(
			<div className='calculator'>
				<div className='firstInput'>
					<label className='inputText'>
					  	<input type="text" value={this.state.value} onChange={this.handleChangeInput1}/>
					</label>
					<label>
						<input
							name="isGoing"
							type="checkbox"
							checked={true}
						/>
					</label>
				</div>
				
				<div className='secondInput'>
					<label className='inputText'>
					  	<input type="text" value={this.state.value} onChange={this.handleChangeInput2}/>
					</label>
					<label>
						<input
							name="isGoing"
							type="checkbox"
							checked={true}
						/>
					</label>
				</div>

				<div className='thirdInput'>
					<label className='inputText'>
					  	<input type="text" value={this.state.value} onChange={this.handleChangeInput3}/>
					</label>
					<label>
						<input
							name="isGoing"
							type="checkbox"
							checked={true}
						/>
					</label>
				</div>

				<ButtonCalculation in1={this.state.valueInput1} in2={this.state.valueInput2} in3={this.state.valueInput3}/>
			</div>
		);
	}
}

export default Calculator;