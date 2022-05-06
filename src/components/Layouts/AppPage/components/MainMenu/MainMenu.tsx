import React from 'react';
import { Link } from 'react-router-dom';
import './MainMenu.styles.scss';

/**
 * MainMenu component description
 */

function MainMenu() {
  return (
    <ul className="MainMenu" data-testid="main-menu">
      <li>
        <Link className="entry" to="/">
          Home page
        </Link>
      </li>
      <li>
        <Link className="entry" to="/about">
          About
        </Link>
      </li>
    </ul>
  );
}

export default MainMenu;
