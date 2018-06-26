import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Caret from '../Caret/index';
import TimeStamp from '../TimeStamp/index';

import './styles.css';

class CommandLine extends Component {
  static propTypes = {
    recordHistory: PropTypes.func,
  };

  state = {
    isCaretVisible: true,
    inputValue: '',
    caretValue: '',
    caretPosition: 0,
    isFocus: false,
  };

  componentDidMount() {
    const dateTime = new Date();
    return this.setState({ dateTime });
  }

  setCaretPosition = () => {
    const caretPosition = this.shadowNode.offsetWidth;

    return this.setState({ caretPosition });
  };

  setCaretValue = () => {
    const valueToCaret = this.state.inputValue.substr(0, this.inputNode.selectionStart);
    const caretValue = valueToCaret.split(' ').join('+');

    return this.setState({ caretValue }, this.setCaretPosition);
  };

  clearInputValueAndCaret = () => {
    return this.setState({
      inputValue: '',
      caretPosition: 0,
      caretValue: '',
    });
  };

  updateInputValueAndCaret = (event) => {
    const inputValue = event.target.value;
    return this.setState({ inputValue }, this.setCaretValue);
  };

  handleSubmit = (event) => {
    event.preventDefault();

    this.props.recordHistory(this.state.inputValue);
    return this.clearInputValueAndCaret();
  };

  handleBlur = (event) => {
    return this.setState({ isFocus: false });
  };

  handleFocus = (event) => {
    return this.setState({ isFocus: true });
  };

  render() {
    return (
      <div className="CommandLine" onClick={() => this.inputNode.focus()}>
        <TimeStamp dateTime={this.state.dateTime}/>

        <form
          className="CommandLine__input-wrap"
          onSubmit={this.handleSubmit}
        >
          <input
            autoFocus
            className="CommandLine__input"
            type="text"
            value={this.state.inputValue}
            ref={node => (this.inputNode = node)}
            onChange={this.updateInputValueAndCaret}
            onClick={this.updateInputValueAndCaret}
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
          />

          <div
            className="CommandLine__shadow"
            ref={node => (this.shadowNode = node)}
          >
            {this.state.caretValue}
          </div>

          <Caret
            isFocus={this.state.isFocus}
            caretPosition={this.state.caretPosition}
          />
      </form>
      </div>
    )
  }
}

export default CommandLine;
