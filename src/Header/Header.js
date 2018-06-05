import React, { Component } from 'react';
import logo from './logo.svg';
import './Header.scss';

class Header extends Component {
  render() {
    return (
      <header className="Header">
        <a href="/">
          <img src={logo} className="Header-logo" alt="logo" />
        </a>
        <h1 className="Header-title">This the site's header</h1>
      </header>
    );
  }
}

export default Header;