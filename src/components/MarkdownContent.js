import React from 'react';
import PropTypes from 'prop-types';
import Markdown from 'markdown-to-jsx';

import Icons from './Icons';

const MarkdownContent = ({ iconsAbove, markdown }) => {
  let IconsBelow = <Icons />;
  let IconsAbove;

  if (iconsAbove) {
    IconsAbove = <Icons />;
    IconsBelow = '';
  }

  return (
    <div>
      {IconsAbove}

      <Markdown>
        {markdown}
      </Markdown>

      {IconsBelow}
    </div>
  )
};

MarkdownContent.defaultProps = {
  iconsAbove: false,
};

MarkdownContent.propTypes = {
  iconsAbove: PropTypes.bool,
  markdown: PropTypes.string.isRequired,
};

export default MarkdownContent;
