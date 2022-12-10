/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-unused-state */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import Calculate from '../logic/calculate';
// calculator
class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      next: null,
      operation: null,
    };
  }

    handleClick = (e) => {
      const res = Calculate(this.state, e.target.innerHTML);
      this.setState(res);
    };

    render() {
      return (
        <div className="Calculator">
          {/* form starts here */}
          <form className="row">
            <input disabled className="res" value={this.state.next || this.state.total || 0} />
          </form>
          {/* form ends here */}

          {/* first button row starts here */}
          <div className="row">
            <button type="button" id="AC" onClick={this.handleClick} className="keypads">AC</button>
            <button type="button" onClick={this.handleClick} id="+/-" className="keypads">+/-</button>
            <button type="button" onClick={this.handleClick} id="%" className="keypads">%</button>
            <button type="button" onClick={this.handleClick} className="keypads">÷</button>
          </div>
          {/* first button row ends here */}

          {/* second button row starts here */}
          <div className="row">
            <button className="keypads" type="button" onClick={this.handleClick}>7</button>
            <button className="keypads" type="button" onClick={this.handleClick}>8</button>
            <button className="keypads" type="button" onClick={this.handleClick}>9</button>
            <button className="keypads" type="button" onClick={this.handleClick}>x</button>
          </div>
          {/* second button row ends here */}

          {/* third button row starts here */}
          <div className="row">
            <button className="keypads" type="button" onClick={this.handleClick}>4</button>
            <button className="keypads" type="button" onClick={this.handleClick}>5</button>
            <button className="keypads" type="button" onClick={this.handleClick}>6</button>
            <button className="keypads" type="button" onClick={this.handleClick}>-</button>
          </div>
          {/* third button row ends here */}

          {/* fourth button row starts here */}
          <div className="row">
            <button className="keypads" type="button" onClick={this.handleClick}>1</button>
            <button className="keypads" type="button" onClick={this.handleClick}>2</button>
            <button className="keypads" type="button" onClick={this.handleClick}>3</button>
            <button className="keypads" type="button" onClick={this.handleClick}>+</button>
          </div>
          {/* fourth button row ends here */}

          {/* fith button row starts here */}
          <div className="row">
            <button className="keypads zero" type="button" onClick={this.handleClick}>0</button>
            <button className="keypads" type="button" onClick={this.handleClick}>.</button>
            <button className="keypads" type="button" onClick={this.handleClick}>=</button>
          </div>
          {/* fith button row ends here */}

        </div>
      );
    }
}

export default Calculator;
