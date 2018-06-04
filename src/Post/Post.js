import React, { Component } from 'react';
import config from 'react-global-configuration';

class Post extends Component {

  constructor(props) {
    super(props);
    this.state = {
      post: {
        id: this.props.match.params.id || null
      }
    }
  }

  componentDidMount() {
    if (this.state.post.id == null) return;
    fetch(`${config.get('apiUrl')}posts/${this.state.post.id}`)
      .then(results => {
        return results.json();
      })
      .then(post => {
        this.setState({post: post});
      });
  }

  render() {
    return (
      <div>
        <pre>{this.state.post.content}</pre>
        <pre>Last Modified: {this.state.post.updateTime}</pre>
      </div>
    );
  }
}

export default Post;