import React from 'react';

import Icon from './Icon';

import '../styles/Icons.css';

const Icons = () => (
  <ul className="Icons">
    <Icon
      name="linkedin"
      title="LinkedIn"
      url="https://linkedin.com/eimaj"
    />

    <Icon
      name="github"
      title="GitHub"
      url="https://github.com/eimaj"
    />
  </ul>
);

export default Icons;
