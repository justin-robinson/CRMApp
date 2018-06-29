import React, {Component} from 'react';
import config from 'react-global-configuration';
import './Author.scss'
import Href from './Href';
import PostPreview from '../Post/Preview';
import ApiFetcher from '../Utils/ApiFetcher';

class Author extends Component {

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
  }

  async fetchData () {
    await this.fetchAuthorData();
    if(!this.props.isPreview){
      await this.fetchPostData();
    }
  }

  async fetchAuthorData () {
    let authorId = this.props.authorId || (this.props.match && this.props.match.params.authorId) || null;
    if (authorId === null || this.state.author.authorId === authorId) {
      return null;
    }
    try {
      let author = await ApiFetcher.fetch(
        `${config.get('apiUrl')}authors/${authorId}`,
        null,
        {useCache: true}
      );

      this.setState({
        author: author
      });
    } catch (e) {
      console.log(`error fetching author ${authorId}`);
    }
  }

  async fetchPostData () {
    let authorId = this.state.author.authorId;
    if (authorId === null || !this.state.posts.areDirty || this.state.posts.areFetching) {
      return null;
    }
    try {
      this.setState(state => {
        state.posts.areFetching = true;
      });
      let results = await ApiFetcher.fetch(
        `${config.get('apiUrl')}authors/${authorId}/posts`,
        null,
        {useCache: true}
      );
      let posts = await results.json();

      let postsState = {...this.state.posts};
      postsState.data = posts;
      postsState.areDirty = false;
      this.setState(state => {
        state.posts.data = posts;
        state.posts.areDirty = false;
        return state;
      });
    } catch (e) {
      console.log(`error fetching author ${authorId}'s posts`);
    }
  }

  async componentDidMount () {
    await this.fetchData();
  }

  async componentDidUpdate () {
    await this.fetchData();
  }

  render () {
    return this.props.isPreview
      ? this.renderPreview()
      : this.renderFull();
  }

  renderPreview () {
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

  renderFull () {
    const listOfPosts = this.state.posts.data.map(post =>
      <li key={post.postId} className="post">
        <PostPreview post={post} author={this.state.author} showAuthor={false}/>
      </li>
    );
    return (
      <div className="author-container">
        <div className="left">
          {this.renderPreview()}
        </div>
        <div className="right">
          <ul className="posts">
            {listOfPosts}
          </ul>
        </div>
      </div>
    );
  }
}

export default Author;