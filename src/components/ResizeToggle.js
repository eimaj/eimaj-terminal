import React from 'react';
import PropTypes from 'prop-types';

import {
  maxContentValue,
  splitValue,
  minContentValue,
} from '../helpers/resizeContent';

import '../styles/ResizeToggle.css';

const ResizeToggle = ({ toggleContentSize }) => {
  const maximizeTerminal = (e) => {
    e.preventDefault();
    return toggleContentSize(24);
  };

  const splitTerminalAndContent = (e) => {
    e.preventDefault();
    return toggleContentSize('50%');
  };

  const minimizeTerminal = (e) => {
    e.preventDefault();
    return toggleContentSize(maxContentSize - 24);
  };

  return (
    <div className="ResizeToggle">
      <a
        className="ResizeToggle__link"
        onClick={maximizeTerminal}
        href="#maximize"
        alt="Maximize content"
        title="Maximize content"
      >
        <i className="ResizeToggle__icon ResizeToggle__icon--maximize" />
        Maximize content
      </a>

      <a
        className="ResizeToggle__link"
        onClick={splitTerminalAndContent}
        href="#split"
        alt="Split terminal and content"
        title="Split terminal and content"
      >
        <i className="ResizeToggle__icon ResizeToggle__icon--split" />
        Split terminal and content
      </a>

      <a
        className="ResizeToggle__link"
        onClick={minimizeTerminal}
        href="#minimize"
        alt="Minimize terminal"
        title="Minimize terminal"
      >
        <i className="ResizeToggle__icon ResizeToggle__icon--minimize" />
        Maximize terminal
      </a>
    </div>
  )
};

ResizeToggle.propTypes = {
  toggleContentSize: PropTypes.func.isRequired,
  maxContentSize: PropTypes.number.isRequired,
};

export default ResizeToggle;
