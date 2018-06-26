import React, { Component } from 'react';
import CommandLine from '../CommandLine/index';

import './styles.css';

class App extends Component {
  state = {
    history: [],
  };

  recordHistory = (command) => {
    const history = [...this.state.history];

    history.push({
      command,
      result: 'result',
      dateTime: new Date(),
    });

    return this.setState({ history });
  };

  render() {
    return (
      <div className="App">
        <CommandLine recordHistory={this.recordHistory}/>
      </div>
    );
  }
}

export default App;
