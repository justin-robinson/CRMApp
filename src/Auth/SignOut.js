import React, {Component} from 'react';
import {Authenticator, SignOut} from 'aws-amplify-react';

class AutoSignOut extends SignOut {
  render() {
    this.signOut();
    return null;
  }
}

class MySignIn extends Component {

  render() {
    return(
      <Authenticator hideDefault={true}>
        <AutoSignOut/>
      </Authenticator>
    )
  }
}

export default MySignIn;