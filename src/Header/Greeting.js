import React from 'react';
import {Greetings} from 'aws-amplify-react';

class InternalGreeting extends Greetings {

  userGreetings() {
    const user = this.state.authData;
    const greeting = this.props.inGreeting || this.inGreeting;
    // get name from attributes first
    const nameFromAttr = user.attributes ?
      (user.attributes.name ||
        (user.attributes.given_name ?
          (user.attributes.given_name + ' ' + user.attributes.family_name) : undefined))
      : undefined;

    const name = nameFromAttr || user.name || user.username;
    const message = (typeof greeting === 'function') ? greeting(name) : greeting;
    return (
      <span>{message}</span>
    )
  }

  noUserGreetings() {
    const greeting = this.props.outGreeting || this.outGreeting;
    const message = (typeof greeting === 'function') ? greeting() : greeting;
    return message ? {message} : null;
  }

  render() {
    const {hide} = this.props;
    if (hide && hide.includes(Greetings)) {
      return null;
    }

    const {authState} = this.state;
    const signedIn = (authState === 'signedIn');

    const greeting = signedIn ? this.userGreetings() : this.noUserGreetings();
    if (!greeting) {
      return null;
    }

    return (
      <div className={'greeting'}>
        <span>
          {greeting}
        </span>
      </div>
    )
  }
}

export default InternalGreeting;