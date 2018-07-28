import React, { Component } from 'react';
import PropTypes from 'prop-types';

import CommandLine from './CommandLine';
import History from './History';
import pages from '../content/index';

import '../styles/Terminal.css';

class Terminal extends Component {
  static propTypes = {
    setPage: PropTypes.func.isRequired,
  };

  state = {
    history: [],
  };

  scrollToBottom = () => {
    this.terminalNode.parentNode.scrollTop = this.terminalNode.parentNode.scrollHeight;
  };

  recordHistory = (command, result) => {
    const history = [...this.state.history];
    const dateTime = new Date();

    history.push({ command, result, dateTime });
    return this.setState({ history }, this.scrollToBottom);
  };

  executeCommand = (command) => {
    const availablePages = Object.keys(pages);
    let result = `Eimaj Command Line Interface

Usage:

  render        Renders page content.
    Available pages: [${availablePages.map((page) => page).join(', ')}]`

    if (availablePages.includes(command)) {
      this.props.setPage(command);
      result = `Rendering ${command}`
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
