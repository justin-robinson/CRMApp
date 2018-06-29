import React, { Component } from 'react';
import Header from './Header/Header';
import Main from './Main/Main';

class App extends Component {
  constructor (props) {
    super(props);
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
