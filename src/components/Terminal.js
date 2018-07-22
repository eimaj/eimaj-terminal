import React, { Component } from 'react';
import PropTypes from 'prop-types';

import CommandLine from './CommandLine';
import History from './History';

import '../styles/Terminal.css';

class Terminal extends Component {
  static propTypes = {
    setContent: PropTypes.func.isRequired,
  };

  state = {
    history: [],
  };

  scrollToBottom = () => {
    this.terminalNode.scrollTop = this.terminalNode.scrollHeight;
  };

  recordHistory = (command) => {
    const history = [...this.state.history];
    const dateTime = new Date();

    history.push({ command, result: 'result', dateTime });
    return this.setState({ history }, this.scrollToBottom);
  };

  executeCommand = (command) => {
    return this.recordHistory(command);
  };

  render() {
    return (
      <div className="Terminal" ref={node => (this.terminalNode = node)}>
        <History history={this.state.history} />
        <CommandLine executeCommand={this.executeCommand}/>
      </div>
    )
  }
}

export default Terminal;
