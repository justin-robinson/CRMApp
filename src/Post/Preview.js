import React, {Component} from 'react';
import PostHref from '../Post/Href';
import Author from '../Author/Author';
import './Preview.scss';
import Markdown from './Markdown';

class Preview extends Component {
  constructor (props) {
    super(props);
    this.state = {
      post: this.props.post
    };
  }

  render () {
    const url = PostHref.getUrl(this.state.post);
    const title = PostHref.getTitle(this.state.post);
    return (
      <div class="post-preview">
        <a className="link" href={url}>
          <div class="left">
            <h2 className="post-title">{title}</h2>
            <Author authorId={this.state.post.authorId}/>
          </div>
          <div class="right">
            <div className="content">
              <Markdown content={this.state.post.content}/>
            </div>
          </div>
        </a>
      </div>
    );
  }
}

export default Preview;