import React from 'react';
import renderer from 'react-test-renderer';
import App from '../App';
// import CalculatorPage from '../pages/CalculatorPage';

it('renders correctly App', () => {
  const tree = renderer.create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});

// it('renders correctly CalculatorPage', () => {
//   const tree = renderer.create(<CalculatorPage />).toJSON();
//   expect(tree).toMatchSnapshot();
// });
