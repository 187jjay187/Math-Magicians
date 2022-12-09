/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
// calculator
class Calculator extends Component {
  render() {
    return (
      <div className="Calculator">
        <div className="row">
          <div className="res">0</div>
        </div>
        <div className="row">
          <div className="keypads">AC</div>
          <div className="keypads">+/-</div>
          <div className="keypads">%</div>
          <div className="keypads">÷</div>
        </div>
        <div className="row">
          <div className="keypads">7</div>
          <div className="keypads">8</div>
          <div className="keypads">9</div>
          <div className="keypads">x</div>
        </div>
        <div className="row">
          <div className="keypads">4</div>
          <div className="keypads">5</div>
          <div className="keypads">6</div>
          <div className="keypads">-</div>
        </div>
        <div className="row">
          <div className="keypads">1</div>
          <div className="keypads">2</div>
          <div className="keypads">3</div>
          <div className="keypads">+</div>
        </div>
        <div className="row">
          <div className="keypads zero">0</div>
          <div className="keypads">.</div>
          <div className="keypads">=</div>
        </div>
      </div>
    );
  }
}

export default Calculator;
