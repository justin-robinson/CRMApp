import React, {Component} from 'react';
import './Author.scss'
import Href from './Href';

class Preview extends Component {

  constructor (props) {
    super(props);

    this.state = {
      author: this.props.author,
      posts: {
        data:        [],
        areFetching: false,
        areDirty:    true
      }
    }
  }

  static defaultProps = {
    author: {},
    isPreview: false
  };

  render () {
    return (
      <div className="author-preview-container">
        <a className="link" href={Href.getUrl(this.state.author)}>
          <img className="avatar" src="/avatar-default.jpg" alt="avatar"/>
          <span>{this.state.author.firstName} {this.state.author.lastName}</span>
          <span className="username">{this.state.author.username}</span>
        </a>
      </div>
    );
  }
}

export default Preview;