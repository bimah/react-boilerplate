import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './header.scss';

const Header = () => (
  <header>
    <div className={styles['main-navigation']}>
      <ul>
        <li><NavLink exact to="/" activeClassName={styles['main-navigation__selected']}>Home</NavLink></li>
        <li><NavLink exact to="/about" activeClassName={styles['main-navigation__selected']}>About</NavLink></li>
        <li><NavLink to="/123" activeClassName={styles['main-navigation__selected']}>Node 123</NavLink></li>
      </ul>
    </div>
  </header>
);

export default Header;
