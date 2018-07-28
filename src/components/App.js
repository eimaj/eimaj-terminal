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
      <div
        style={{ height: '100vh' }}
        ref={node => (this.splitPanelNode = node)}
      >
        <SplitPane
          className="App"
          split="horizontal"
          minSize={10}
          maxSize={-24}
          size={this.state.currentSize}
        >
          <Content page={this.state.markdownPage} />
          <Terminal setPage={this.setPage} />
        </SplitPane>

      </div>
    );
  }
}

export default App;
