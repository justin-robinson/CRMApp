import React, { Component } from 'react';
import config from 'react-global-configuration';
import './Post.scss';
import Author from '../Author/Author';
import Markdown from './Markdown';
import ScrollPositionIndicator from '../ScrollPositionIndicator/ScrollPositionIndicator';

class Post extends Component {

  state = {
    post: {}
  }

  async fetchData() {
    let postId = this.props.postId || (this.props.match && this.props.match.params.postId) || null;
    if (postId === null || this.state.post.postId === postId) {
      return null;
    }
    let results = await fetch(`${config.get('apiUrl')}posts/${postId}`);
    let post = await results.json();

    this.setState({
      post: post
    });
  }

  async componentDidMount() {
    await this.fetchData();
  }

  async componentDidUpdate () {
    await this.fetchData();
  }

  render() {
    return (
      <div className="post">
        <ScrollPositionIndicator />
        <Author authorId={this.state.post.authorId} />
        <h2>{this.state.post.title}</h2>
        <div className="content-container">
          <div className="content">
            <Markdown content={this.state.post.content}/>
          </div>
        </div>
        <pre>Last Modified: {this.state.post.updateTime}</pre>
      </div>
    );
  }
}

export default Post;