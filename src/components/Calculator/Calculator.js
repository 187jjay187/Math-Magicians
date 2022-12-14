import React, { useState } from 'react';
import Calculate from './logic/calculate';
// calculator
const Calculator = () => {
  const [state, setState] = useState({
    total: 0,
    next: null,
    operation: null,
  });

  const handleClick = (e) => {
    const res = Calculate(state, e.target.innerHTML);
    setState(res);
  };

  const { total, next, operation } = state;
  return (
    <div className="Calculator">
      {/* form starts here */}
      <form className="row">
        <input disabled className="res" value={next || total || operation || 0} />
      </form>
      {/* form ends here */}

      {/* first button row starts here */}
      <div className="row">
        <button type="button" id="AC" onClick={handleClick} className="keypads">AC</button>
        <button type="button" onClick={handleClick} id="+/-" className="keypads">+/-</button>
        <button type="button" onClick={handleClick} id="%" className="keypads">%</button>
        <button type="button" onClick={handleClick} className="keypads">÷</button>
      </div>
      {/* first button row ends here */}

      {/* second button row starts here */}
      <div className="row">
        <button className="keypads" type="button" onClick={handleClick}>7</button>
        <button className="keypads" type="button" onClick={handleClick}>8</button>
        <button className="keypads" type="button" onClick={handleClick}>9</button>
        <button className="keypads" type="button" onClick={handleClick}>x</button>
      </div>
      {/* second button row ends here */}

      {/* third button row starts here */}
      <div className="row">
        <button className="keypads" type="button" onClick={handleClick}>4</button>
        <button className="keypads" type="button" onClick={handleClick}>5</button>
        <button className="keypads" type="button" onClick={handleClick}>6</button>
        <button className="keypads" type="button" onClick={handleClick}>-</button>
      </div>
      {/* third button row ends here */}

      {/* fourth button row starts here */}
      <div className="row">
        <button className="keypads" type="button" onClick={handleClick}>1</button>
        <button className="keypads" type="button" onClick={handleClick}>2</button>
        <button className="keypads" type="button" onClick={handleClick}>3</button>
        <button className="keypads" type="button" onClick={handleClick}>+</button>
      </div>
      {/* fourth button row ends here */}

      {/* fith button row starts here */}
      <div className="row">
        <button className="keypads zero" type="button" onClick={handleClick}>0</button>
        <button className="keypads" type="button" onClick={handleClick}>.</button>
        <button className="keypads" type="button" onClick={handleClick}>=</button>
      </div>
      {/* fith button row ends here */}

    </div>
  );
};

export default Calculator;
