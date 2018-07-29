import React from 'react';
import PropTypes from 'prop-types';

import '../styles/ResizeToggle.css';

const ResizeToggle = ({ toggleContentSize, maxContentSize }) => {

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
        className="ResizeToggle__link ResizeToggle__link--maximize"
        onClick={maximizeTerminal}
        href="#maximize"
      >
        <i className="ResizeToggle__icon" />
        Maximize content
      </a>

      <a
        className="ResizeToggle__link ResizeToggle__link--minimize"
        onClick={minimizeTerminal}
        href="#minimize"
      >
        <i className="ResizeToggle__icon" />
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
