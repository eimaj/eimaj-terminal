import React from 'react';

import '../styles/Header.css';
import avatar from '../images/eimaj_elsa.jpg';

const Header = ({ page }) => (
  <header className="Header">
    <a className="Header__avatar" href="/">
      <img
        className="Header__photo"
        src={avatar}
        alt="My daughter and I painting"
      />
    </a>
  </header>
);

export default Header;
