import React, { Component } from 'react';
import Header from './Header/Header';
import Main from './Main/Main';
import Session from './Utils/Session';

class App extends Component {
  constructor (props) {
    super(props);
    if (!Session.hasValidSession()){
      Session.createSession();
    }
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Main />
      </div>
    );
  }
}

export default App;
