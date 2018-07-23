import React, { Component } from 'react';

import '../styles/App.css';

class App extends Component {
  state = {
  };

  recordHistory = (command) => {
    const history = [...this.state.history];
    const dateTime = new Date();

    history.push({ command, result: 'result', dateTime });
    return this.setState({ history });
  setContent = (markdownContent) => {
    return this.setState({ markdownContent });
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
