import React from 'react';

import ContentHOC from '../Content';
import MarkdownContent from '../MarkdownContent';

import markdown from '../../content/pixelCards.md';

const Content = () => (
  <MarkdownContent markdown={markdown} />
);

export default ContentHOC(Content);
