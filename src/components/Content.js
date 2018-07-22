import React from 'react';
import PropTypes from 'prop-types';
import Markdown from 'markdown-to-jsx';
import markdownContent from '../content/index';

import '../styles/Content.css';

const Content = ({ content }) => {
  console.log(content);

  return (
    <div className="Content">
      <Markdown>
        {markdownContent[content]}
      </Markdown>
    </div>
  )
};

Content.defaultProps = {
  content: '',
};

Content.propTypes = {
  content: PropTypes.string,
};

export default Content;
