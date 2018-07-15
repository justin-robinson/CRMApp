import React, {Component} from 'react';
import PostHref from '../Post/Href';
import AuthorPreview from '../Author/Preview';
import './Preview.scss';
import Markdown from './Markdown';

class Preview extends Component {
  constructor (props) {
    super(props);
    this.state = {
      post: this.props.post,
      author: this.props.author
    };
  }

  static defaultProps = {
    showAuthor: true
  };

  render () {
    const url = PostHref.getUrl(this.state.post);
    const title = PostHref.getTitle(this.state.post);
    const authorClass = this.props.showAuthor ? '' : 'hidden';
    return (
      <a className="link" href={url}>
        <div className="post-preview">
          <div className="left">
            <div className={authorClass}>
              <AuthorPreview author={this.state.post.author} />
            </div>
          </div>
          <div className="right">
            <h2 className="post-title">{title}</h2>
            <div className="content">
              <Markdown content={this.state.post.content} disallowedTypes={['link']}/>
            </div>
          </div>
        </div>
      </a>
    );
  }
}

export default Preview;