import React from 'react';
import MainMenu from '../MainMenu/MainMenu';
import './Header.styles.scss';

/**
 * Header component description
 */

function Header() {
  return (
    <div className="Header" data-testid="header">
      <div className="main-title">Iabsis react boilerplate</div>
      <MainMenu />
    </div>
  );
}

export default Header;
