import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/Header.css';
import avatar from '../images/eimaj_elsa.jpg';

const Header = ({ page }) => (
  <header className="Header">
    <Link  to="/" className="Header__avatar">
      <img
        className="Header__photo"
        src={avatar}
        alt="My daughter and I painting"
      />
    </Link>
  </header>
);

export default Header;
