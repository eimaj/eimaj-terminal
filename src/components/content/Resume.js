import React from 'react';

import ContentHOC from '../Content';
import MarkdownContent from '../MarkdownContent';

import markdown from '../../content/resume.md';

const Content = () => (
  <MarkdownContent markdown={markdown} iconsAbove={true} />
);

export default ContentHOC(Content);
