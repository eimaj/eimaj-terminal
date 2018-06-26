import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

const Caret = ({ caretPosition, isFocus }) => (
  <div
    className={'Caret' + (isFocus ? ' Caret--is-focus' : '')}
    style={{ left: caretPosition }}
  />
);

Caret.defaultProps = {
  isFocus: false,
  caretPosition: 0,
};

Caret.propTypes = {
  isFocus: PropTypes.bool,
  caretPosition: PropTypes.number,
};

export default Caret;
