import React, { Component } from 'react';

import '../styles/CommandLine.css';

class CommandLine extends Component {
  state = {
    isCaretVisible: true,
    inputValue: '',
    caretValue: '',
    caretPosition: 0,
    isFocus: false,
  };

  setCaretPosition = () => {
    const caretPosition = this.outputNode.offsetWidth;

    return this.setState({ caretPosition });
  };

  setCaretValue = () => {
    const valueToCaret = this.inputNode.value.substr(0, this.inputNode.selectionStart);
    const caretValue = valueToCaret.split(' ').join('+');

    return this.setState({ caretValue }, this.setCaretPosition());
  };

  updateValue = (event) => {
    return this.setState({ inputValue: event.target.value }, this.setCaretValue);
  };

  handleBlur = (event) => {
    return this.setState({ isFocus: false });
  };

  handleFocus = (event) => {
    return this.setState({ isFocus: true }, this.updateValue(event));
  };

  render() {
    return (
      <div className="CommandLine" onClick={() => this.inputNode.focus()}>

        <div className="CommandLine__timestamp">
          12:34 eimaj:cli&nbsp;
        </div>

        <div className="CommandLine__input-wrap" >
          <input
            autoFocus
            className="CommandLine__input"
            type="text"
            ref={node => (this.inputNode = node)}
            onChange={this.updateValue}
            onKeyUp={this.updateValue}
            onKeyDown={this.updateValue}
            onInput={this.updateValue}
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
            onClick={this.updateValue}
          />

          <span
            className={'CommandLine__caret' + (this.state.isFocus ? ' CommandLine__caret--is-focus' : '')}
            style={{ left: this.state.caretPosition }}
            ref={node => (this.caretNode = node)}
          />
        </div>

        <div className="CommandLine__output" ref={node => (this.outputNode = node)}>
          {this.state.caretValue}
        </div>

      </div>
    )
  }
}

export default CommandLine;
