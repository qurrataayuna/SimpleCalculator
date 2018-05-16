import React, { Component } from 'react';
import ButtonCalculation from '../buttonCalculation/buttonCalculation';
import './css/calculator.css';

class Calculator extends Component {
	constructor() {
		super();
		this.state = {
			valueInput1: null,
			valueInput2: null,
			valueInput3: null,

			checked1: false,
			checked2: false,
			checked3: false,
		};
		this.handleChangeInput1 = this.handleChangeInput1.bind(this);
		this.handleChangeInput2 = this.handleChangeInput2.bind(this);
		this.handleChangeInput3 = this.handleChangeInput3.bind(this);
		this.handleChangeChecked1 = this.handleChangeChecked1.bind(this);
		this.handleChangeChecked2 = this.handleChangeChecked2.bind(this);
		this.handleChangeChecked3 = this.handleChangeChecked3.bind(this);
	}

	handleChangeInput1(e){
		if(this.state.checked1 === true){
			this.setState({valueInput1: e.target.value});
		}
	}
	
	handleChangeInput2(e){
		if(this.state.checked2 === true){
			this.setState({valueInput2: e.target.value});
		}
	}
	
	handleChangeInput3(e){
		if(this.state.checked3 === true){
			this.setState({valueInput3: e.target.value});
		}
	}

	handleChangeChecked1(e){
		this.setState({checked1: e.target.checked});
	}

	handleChangeChecked2(e){
		this.setState({checked2: e.target.checked});
	}
	handleChangeChecked3(e){
		this.setState({checked3: e.target.checked});
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
							checked={this.state.checked1}
							onChange={this.handleChangeChecked1}
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
							checked={this.state.checked2}
							onChange={this.handleChangeChecked2}
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
							checked={this.state.checked3}
							onChange={this.handleChangeChecked3}
						/>
					</label>
				</div>

				<ButtonCalculation 
					in1={this.state.valueInput1} 
					in2={this.state.valueInput2} 
					in3={this.state.valueInput3}
					check1={this.state.checked1}
					check2={this.state.checked2}
					check3={this.state.checked3}
				/>
			</div>
		);
	}
}

export default Calculator;