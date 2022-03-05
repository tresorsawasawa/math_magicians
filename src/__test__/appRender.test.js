import React from 'react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom/extend-expect';

// import { render, screen, fireEvent } from '@testing-library/react';
// // import Calculator from '../../components/Calc';
// import App from '../App';

describe('Calculator page component', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Calculator />).toJSON();
    expect(tree).toMatchSnapshot();
  });

//   it('should return the sum of two number form UI', () => {
//     render(<Calculator />);
//     fireEvent.click(screen.getByTestId('4'));
//     fireEvent.click(screen.getByTestId('+'));
//     fireEvent.click(screen.getByTestId('7'));
//     fireEvent.click(screen.getByTestId('='));
//     const result = screen.getByTestId('result');
//     screen.debug();
//     expect(result.innerHTML).toBe('11');
//   });
// })
