import React, {Component} from 'react';
import logo from './logo.svg';
import './Header.scss';
import {Authenticator, withOAuth} from 'aws-amplify-react';
import SignIn from './SignIn';
import SignOut from './SignOut';
import Greeting from './Greeting';

class Header extends Component {

  render() {
    return (
      <header className="header">
        <div className="logo-container">
          <a href="/">
            <img src={logo} className="logo" alt="logo"/>
          </a>
          <h1 className="title">lucunas.io</h1>
        </div>
        <div className="right">
          <Authenticator hideDefault={true}>
            <SignIn />
            <Greeting />
            <SignOut />
          </Authenticator>
        </div>
      </header>
    );
  }
}

export default withOAuth(Header);