import React from 'react';
import PropTypes from 'prop-types';

import {
  maxContentValue,
  splitValue,
  minContentValue,
} from '../helpers/resizeContent';

import '../styles/ResizeToggle.css';

const ResizeToggle = ({ toggleContentSize }) => {
  /**
   * maximizeTerminal - Returns toggleContentSize() with the minContentValue() as param.
   */
  const maximizeTerminal = (e) => {
    e.preventDefault();
    return toggleContentSize(minContentValue);
  };

  /**
  * splitTerminalAndContent - Returns toggleContentSize() with the splitValue() as param.
  */
  const splitTerminalAndContent = (e) => {
    e.preventDefault();
    return toggleContentSize(splitValue);
  };

  /**
  * minimizeTerminal - Returns toggleContentSize() with the maxContentValue() as param.
  */
  const minimizeTerminal = (e) => {
    e.preventDefault();
    return toggleContentSize(maxContentValue);
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
};

export default ResizeToggle;
