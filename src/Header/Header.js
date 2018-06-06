import React, { Component } from 'react';
import logo from './logo.svg';
import './Header.scss';

class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="logo-container">
          <a href="/">
            <img src={logo} className="logo" alt="logo" />
          </a>
          <h1 className="title">Lucunas</h1>
        </div>
      </header>
    );
  }
}

export default Header;