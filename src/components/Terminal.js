import React, { Component } from 'react';
import PropTypes from 'prop-types';

import CommandLine from './CommandLine';
import History from './History';

import '../styles/Terminal.css';

class Terminal extends Component {
  static propTypes = {
    toggleContentSize: PropTypes.func.isRequired,
  };

  state = {
    history: [],
  };

  scrollToBottom = () => {
    this.terminalNode.parentNode.scrollTop = this.terminalNode.parentNode.scrollHeight;
  };

  recordHistory = (command, output) => {
    const dateTime = new Date();
    const history = [...this.state.history];

    // Update Content via react-router/history:
    if (!!output.render) {
      this.props.history.push(output.render);
    }

    // TODO: Side Effect => Update Content/Terminal pane size:
    if (!!output.terminalSize) {
      return this.props.toggleContentSize(output.terminalSize);
    }

    // Update Terminal history:
    history.push({ command, result: output.message, dateTime });
    return this.setState({ history }, this.scrollToBottom);
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
          recordHistory={this.recordHistory}
          ref={node => (this.commandLineNode = node)}
        />
      </div>
    )
  }
}

export default Terminal;
