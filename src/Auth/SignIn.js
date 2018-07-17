import React, {Component} from 'react';
import {Authenticator} from 'aws-amplify-react';

class MySignIn extends Component {

  render() {
    return(
      <Authenticator />
    )
  }
}

export default MySignIn;