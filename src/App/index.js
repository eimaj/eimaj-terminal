import React, { Component } from 'react';
import CommandLine from '../CommandLine/index';
import History from '../History/index';

import './styles.css';

class App extends Component {
  state = {
    history: [],
  };

  recordHistory = (command) => {
    const history = [...this.state.history];
    const dateTime = new Date();

    history.push({ command, result: 'result', dateTime });
    return this.setState({ history });
  };

  render() {
    return (
      <div className="App">
        <History history={this.state.history} />
        <CommandLine recordHistory={this.recordHistory}/>
      </div>
    );
  }
}

export default App;
