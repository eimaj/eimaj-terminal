import React, { Component } from 'react';
import SplitPane from 'react-split-pane';
import Content from './Content';
import Terminal from './Terminal';

import '../styles/App.css';

class App extends Component {
  state = {
    markdownPage: 'home',
  };

  setPage = (markdownPage) => {
    return this.setState({ markdownPage });
  };

  render() {
    return (
      <SplitPane
        className="App"
        split="horizontal"
        minSize={10}
        maxSize={-24}
        defaultSize={100}
      >
        <Content content={this.state.markdownContent} />
        <Terminal setContent={this.setContent} />
      </SplitPane>
    );
  }
}

export default App;
