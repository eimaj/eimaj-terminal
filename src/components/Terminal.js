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

  /**
   * scrollToBottom - Scrolls the Terminal to the bottom so that the focus is on the active caret.
   */
  scrollToBottom = () => {
    this.terminalNode.parentNode.scrollTop = this.terminalNode.parentNode.scrollHeight;
  };

  /**
   * recordHistory - Logs the command and output into the history Array. If output contains
   * `render` react-router history will also be updated.
   *
   * @param {String} command  The command that the user ran
   * @param {Object} output   The response returned from executeCommand(command)
   * @return                  Updates the state and on completion, triggers this.scrollToBottom()
   */
  recordHistory = (command, output) => {
    const dateTime = new Date();
    const history = [...this.state.history];

    // TODO: Side Effect => Update Content via react-router/history:
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

  /**
   * focusOnClick - Sets focus() on the CommandLine input when Terminal component is clicked.
   */
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
