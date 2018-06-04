import React, { Component } from 'react';

class Url extends Component {

  constructor(props) {
    super(props);
    this.state = {
      post: this.props.post
    };
  }

  render() {
    const title = this.state.post.title || 'No Title';
    const url = [title
      .replace(/[^a-zA-Z]/g, ' ')
      .replace(/\s+/g, '-')
      .replace(/-$/, '')
      , this.state.post.postId]
      .map(value => encodeURIComponent(value))
      .join('/');
    return (
      <a href={url}>{title}</a>
    );
  }
}

export default Url;