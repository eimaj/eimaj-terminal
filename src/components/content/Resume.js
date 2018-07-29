import React from 'react';
import Markdown from 'markdown-to-jsx';

import ContentHOC from '../Content';
import Icons from '../Icons';

import markdown from './resume.md';

const CV = () => (
  <div>
    <Icons />

    <Markdown>
      {markdown}
    </Markdown>
  </div>
);

export default ContentHOC(CV);
