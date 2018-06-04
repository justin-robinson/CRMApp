import React, { Component } from 'react';
import config from 'react-global-configuration';

class Post extends Component {

  constructor(props) {
    super(props);
    this.state = {
      post: {
        postId: this.props.postId || this.props.match.params.postId || null
      }
    }
  }

  componentDidMount() {
    if (this.state.post.postId == null) return;
    fetch(`${config.get('apiUrl')}posts/${this.state.post.postId}`)
      .then(results => {
        return results.json();
      })
      .then(post => {
        this.setState({post: post});
        console.log('post' + post.postId);
      });
  }

  render() {
    return (
      <div>
        <pre>{this.state.post.title}</pre>
        <pre>{this.state.post.content}</pre>
        <pre>Last Modified: {this.state.post.updateTime}</pre>
      </div>
    );
  }
}

export default Post;