import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import Home from '../Home/Home';
import Post from '../Post/Post';
import './Main.css';

class Main extends Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/post/:id' component={Post}/>
        </Switch>
      </main>
    );
  }
}

export default Main;