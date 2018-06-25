import React, { Component } from 'react';
import CommandLine from './CommandLine';
import './styles/App.css';

class App extends Component {
  state = {
    title: 'Hi',
  };

  render() {
    return (
      <div className="App">
        <CommandLine />
      </div>
    );
  }
}

export default App;
