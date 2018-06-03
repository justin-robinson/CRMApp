import React, { Component } from 'react';

class Post extends Component {
  render() {
    return (
      <span>IDs: {this.props.match.params.id}</span>
    );
  }
}

export default Post;