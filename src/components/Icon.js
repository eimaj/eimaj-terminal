import React from 'react';
import PropTypes from 'prop-types';

import Download from './svg/Download';
import GitHub from './svg/GitHub';
import Instagram from './svg/Instagram';
import LinkedIn from './svg/LinkedIn';
import Twitter from './svg/Twitter';

import '../styles/Icon.css';

const Icon = ({ name, title, url }) => {
  let Svg;

  switch (title) {
    case 'Twitter':
      Svg = Twitter;
      break;
    case 'Instagram':
      Svg = Instagram;
      break;
    case 'LinkedIn':
      Svg = LinkedIn;
      break;
    case 'GitHub':
      Svg = GitHub;
      break;
    default:
      Svg = Download;
  }

  return (
    <li className="Icon">
      <a
        className={`Icon__link Icon--${name}`}
        href={url}
        title={title}
        alt={title}
        target="_"
      >
        <svg x="0px" y="0px"
           width="100%" height="100%" viewBox="0 0 512 512" fill="white">
          <Svg />
        </svg>
      </a>
    </li>
  );
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default Icon;
