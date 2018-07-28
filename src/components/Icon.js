import React from 'react';
import PropTypes from 'prop-types';

import '../styles/Icon.css';

const Icon = ({ name, icon, title, url }) => (
  <li className="Icon">
    <a
      className={`Icon__link Icon--${name}`}
      href={url}
      title={title}
      alt={title}
      target="_"
    >
      <i className={`ion ion-${icon}`} />
    </a>
  </li>
);

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};


export default Icon;
