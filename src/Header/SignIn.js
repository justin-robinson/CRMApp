import React from 'react';
import './Header.scss';
import {SignIn} from 'aws-amplify-react';
import Button from '../Button/Button';

class MySignIn extends SignIn {
  render() {
    if (this.props.authState === 'signedIn') {
      return null;
    }
    return (
      <div className={'sign-in'}>
        <a href="/signin">
          <Button className={'action'}>
            Sign In
          </Button>
        </a>
      </div>
    )
  }
}

export default MySignIn;