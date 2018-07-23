import React, { Component } from 'react';
import SplitPane from 'react-split-pane';
import Content from './Content';
import Terminal from './Terminal';

import '../styles/App.css';

class App extends Component {
  state = {
  };

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
