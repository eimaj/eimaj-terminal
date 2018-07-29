import React, { Component } from 'react';

import CommandLine from './CommandLine';
import History from './History';

import '../styles/Terminal.css';

class Terminal extends Component {
  state = {
    history: [],
  };

  scrollToBottom = () => {
    this.terminalNode.parentNode.scrollTop = this.terminalNode.parentNode.scrollHeight;
  };

  recordHistory = (command, result) => {
    const dateTime = new Date();
    const history = [...this.state.history];

    // Update Terminal history:
    history.push({ command, result, dateTime });
    return this.setState({ history }, this.scrollToBottom);
  };

  executeCommand = (command) => {
    // TODO: Move this out and handle terminal commands externally.
    const availablePages = ['home', 'cv', 'pixel'];
    let result = `Eimaj Command Line Interface

Usage:

  render        Renders page content.
    Available pages: [${availablePages.map((page) => page).join(', ')}]`

    if (availablePages.includes(command)) {
      result = `Rendering ${command}`

      // Update content via react-router/history:
      if (command === 'home') {
        this.props.history.push('/');
      } else {
        this.props.history.push(`/${command}`);
      }
    }

    return this.recordHistory(command, result);
  };

  focusOnClick = () => {
    this.scrollToBottom();

    return this.terminalNode.querySelector('.CommandLine__input').focus();
  };

  render() {
    return (
      <div
        className="Terminal"
        ref={node => (this.terminalNode = node)}
        onClick={this.focusOnClick}
      >
        <History history={this.state.history} />
        <CommandLine
          executeCommand={this.executeCommand}
          ref={node => (this.commandLineNode = node)}
        />
      </div>
    )
  }
}

export default Terminal;
