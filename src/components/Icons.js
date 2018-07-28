import React from 'react';

import Icon from './Icon';

import '../styles/Icons.css';

const Icons = () => (
  <ul className="Icons">
    <Icon
      name="linkedin"
      icon="social-linkedin"
      title="LinkedIn"
      url="https://linkedin.com/eimaj"
    />

    <Icon
      name="github"
      icon="social-github"
      title="GitHub"
      url="https://github.com/eimaj"
    />

    <Icon
      name="twitter"
      icon="social-twitter"
      title="Twitter"
      url="https://twitter.com/eimaj"
    />

    <Icon
      name="instagram"
      icon="social-instagram"
      title="Instagram"
      url="https://instagram.com/eimaj"
    />

    <Icon
      name="resume"
      icon="android-download"
      title="Download Resume as PDF"
      url="./jamie-allen_resume.pdf"
    />
  </ul>
);

export default Icons;
