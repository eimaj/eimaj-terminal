import React from 'react';
import PropTypes from 'prop-types';

import Header from './Header';

import '../styles/Content.css';

const Content = (ChildComponent) => ({ size }) => {
  const classNames = ['Content'];

  if (!!size) {
    classNames.push(`Content--${size}`);
  }

  return (
    <div className={classNames.join(' ')}>
      <Header />
      <div className="Content__box">
        <ChildComponent />

        <p className="Content__foot">
          Built with <a
            href="https://github.com/facebook/create-react-app"
            target="_"
          >Create React App</a>. Source on <a
            href="https://github.com/eimaj/eimaj-terminal"
            target="_"
          >
            GitHub
          </a>.
      </p>
      </div>
    </div>
  )
};

Content.defaultProps = {
  size: '',
};

Content.propTypes = {
  size: PropTypes.string,
};

export default Content;
