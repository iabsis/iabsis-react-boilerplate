import React from 'react';
import { NavLink } from 'react-router-dom';
import './MainMenu.styles.scss';

/**
 * MainMenu component description
 */

function MainMenu() {
  return (
    <ul className="MainMenu" data-testid="main-menu">
      <li>
        <NavLink className="entry" to="/">
          Home page
        </NavLink>
      </li>
      <li>
        <NavLink className="entry" to="/about">
          About
        </NavLink>
      </li>
    </ul>
  );
}

export default MainMenu;
