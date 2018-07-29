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
