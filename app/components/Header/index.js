import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './header.scss';

const Header = () => (
  <header>
    <div className={styles['main-navigation']}>
      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
      </ul>
    </div>
  </header>
);

export default Header;
