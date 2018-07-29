import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import SplitPane from 'react-split-pane';

import ResizeToggle from './ResizeToggle';
import Terminal from './Terminal';

import Home from './content/Home';
import Resume from './content/Resume';
import PixelCards from './content/PixelCards';

import '../styles/App.css';

class App extends Component {
  state = {
    currentSize: '80%',
    maxContentSize: 800,
  };

  componentDidMount() {
    const windowSize = this.splitPanelNode.offsetHeight;
    return this.setState({ maxContentSize: windowSize });
  };

  routeToPage = () => {
    // this.props.history.push('/some/path')
    console.log(this);
    return false;
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
        <Router>
          <SplitPane
            className="App"
            split="horizontal"
            minSize={10}
            maxSize={-24}
            size={this.state.currentSize}
          >
            <div className="App__content  a">
              <Route exact path="/" component={Home} />
              <Route path="/cv" render={() => (<Resume size="wide" />)} />
              <Route path="/pixel" render={() => (<PixelCards size="wide" />)} />
            </div>

            <Route path="*" component={Terminal} />
          </SplitPane>
        </Router>

        <ResizeToggle
          toggleContentSize={this.toggleContentSize}
          maxContentSize={this.state.maxContentSize}
        />
      </div>
    );
  }
}

export default App;
