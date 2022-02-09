import React, { Component } from 'react';
import Calculator from './components/Calculator';

class App extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <div>
        <Calculator />
      </div>
    );
  }
}

export default App;
