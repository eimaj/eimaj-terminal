import React from 'react';
import PropTypes from 'prop-types';
import Markdown from 'markdown-to-jsx';

import Header from './Header';
import Icons from './Icons';

import pages from '../content/index';
import '../styles/Content.css';

const Content = ({ page }) => {
  const { classNames, content } = pages[page];

  return (
    <div className={['Content', classNames].join(' ')}>
      <Header />
      <div className="Content__box">
        <Markdown>
          {content}
        </Markdown>
        <hr />
        <Icons />
      </div>
    </div>
  )
};

Content.defaultProps = {
  page: '',
};

Content.propTypes = {
  page: PropTypes.string,
};

export default Content;
