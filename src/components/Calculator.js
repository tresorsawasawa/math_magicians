import React, { useState } from 'react';
import calculate from '../logic/calculate';
import CalcData from './CalcData';

const Calculator = () => {
  const [state, setState] = useState({
    total: null,
    next: null,
    opreration: null,
  });

  const handleCalculate = ({ currentTarget: btn }) => {
    const buttonName = btn.outerText;
    try {
      const obj = calculate(state, buttonName);
      setState({ ...state, ...obj });
    } catch (error) {
      const { next } = state;

      if (next) {
        setState({ ...state, total: next, next: null });
      }

      setState({ opertion: buttonName });
    }
  };

  const { next, total } = state;

  return (
    <div className="container">
      <div className="screen-result light-text">
        {total && next ? next : total || next || '0'}
      </div>
      <div className="calc-wrapper">
        {CalcData.map((row) => row.map((data) => (
          <button
            type="button"
            key={data.name}
            className={data.className}
            onClick={(e) => handleCalculate(e)}
          >
            {data.name}
          </button>
        )))}
      </div>
    </div>
  );
};

export default Calculator;
