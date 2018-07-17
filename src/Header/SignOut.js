import React from 'react';
import './Header.scss';
import {SignOut} from 'aws-amplify-react';
import Button from '../Button/Button';

class MySignIn extends SignOut {
  render() {
    if (this.state.authState !== 'signedIn') {
      return null;
    }
    return (
      <div className={'sign-out'}>
        <a href="/signout">
          <Button className={'action'}>
            Sign Out
          </Button>
        </a>
      </div>
    )
  }
}

export default MySignIn;