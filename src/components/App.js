import React, { Component } from 'react';
import SplitPane from 'react-split-pane';

import Content from './Content';
import ResizeToggle from './ResizeToggle';
import Terminal from './Terminal';

import '../styles/App.css';

class App extends Component {
  state = {
    markdownPage: 'home',
    currentSize: '80%',
    maxContentSize: 800,
  };

  componentDidMount() {
    const windowSize = this.splitPanelNode.offsetHeight;
    return this.setState({ maxContentSize: windowSize });
  };

  setPage = (markdownPage) => {
    return this.setState({ markdownPage });
  };

  toggleContentSize = (newSize = '80%') => {
    return this.setState({ currentSize: newSize });
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

        <ResizeToggle
          toggleContentSize={this.toggleContentSize}
          maxContentSize={this.state.maxContentSize}
        />
      </div>
    );
  }
}

export default App;
