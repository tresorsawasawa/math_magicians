import React, { Component } from 'react';
import calculate from '../logic/calculate';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount = () => {
    this.setState({
      total: null,
      next: null,
      opreration: null,
    });
  }

  render() {
    return (
      <div className="container">
        <div className="screen-result light-text">0</div>
        <div className="calc-wrapper">
          <button type="button" className="btn light-gray" onClick={this.handleCalculate}>AC</button>
          <button type="button" className="btn light-gray" onClick={this.handleCalculate}>+/-</button>
          <button type="button" className="btn light-gray" onClick={this.handleCalculate}>%</button>
          <button type="button" className="btn bg-orange" onClick={this.handleCalculate}>÷</button>
          <button type="button" className="btn light-gray" onClick={this.handleCalculate}>7</button>
          <button type="button" className="btn light-gray" onClick={this.handleCalculate}>8</button>
          <button type="button" className="btn light-gray" onClick={this.handleCalculate}>9</button>
          <button type="button" className="btn bg-orange" onClick={this.handleCalculate}>X</button>
          <button type="button" className="btn light-gray" onClick={this.handleCalculate}>4</button>
          <button type="button" className="btn light-gray" onClick={this.handleCalculate}>5</button>
          <button type="button" className="btn light-gray" onClick={this.handleCalculate}>6</button>
          <button type="button" className="btn bg-orange" onClick={this.handleCalculate}>+</button>
          <button type="button" className="btn light-gray" onClick={this.handleCalculate}>1</button>
          <button type="button" className="btn light-gray" onClick={this.handleCalculate}>2</button>
          <button type="button" className="btn light-gray" onClick={this.handleCalculate}>3</button>
          <button type="button" className="btn bg-orange" onClick={this.handleCalculate}>-</button>
          <button type="button" className="btn light-gray btn-0" onClick={this.handleCalculate}>0</button>
          <button type="button" className="btn light-gray" onClick={this.handleCalculate}>.</button>
          <button type="button" className="btn bg-orange" onClick={this.handleCalculate}>=</button>
        </div>
      </div>
    );
  }
}

export default Calculator;
