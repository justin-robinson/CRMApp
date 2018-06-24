import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import Home from '../Home/Home';
import Post from '../Post/Post';
import Author from '../Author/Author';

class Router extends Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/author/:name/:authorId' component={Author}/>
          <Route path='/:slug/:postId' component={Post}/>
        </Switch>
      </main>
    );
  }
}

export default Router;