import React, { Component } from 'react';
import config from 'react-global-configuration';
import './Post.css';
import Author from '../Author/Author';
import ReactMarkdown from 'react-markdown';

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
      <div class="post">
        <Author authorId={this.state.post.authorId} />
        <h2>{this.state.post.title}</h2>
        <div class="content-container">
          <div class="content">
            <ReactMarkdown source={this.state.post.content}/>
          </div>
        </div>
        <pre>Last Modified: {this.state.post.updateTime}</pre>
      </div>
    );
  }
}

export default Post;