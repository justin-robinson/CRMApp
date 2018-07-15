import React, {Component} from 'react';
import './Author.scss'
import {Query} from 'react-apollo';
import PostPreview from '../Post/Preview';
import Href from './Href';
import authorWithPosts from '../Queries/AuthorWithPosts';

class Author extends Component {

  render() {
    let authorId = this.props.authorId || (this.props.match && this.props.match.params.authorId) || null;

    return <Query query={authorWithPosts} variables={{authorId}}>
      {({loading, error, data}) => {
        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error :(</p>;

        const listOfPosts = data.getAuthor.posts.items.map(post =>
          <li key={post.postId} className="post">
            <PostPreview post={post} showAuthor={false} />
          </li>
        );
        return (
          <div className="author-container">
            <div className="left">
              <div className="author-preview-container">
                <a className="link" href={Href.getUrl(data.getAuthor)}>
                  <img className="avatar" src="/avatar-default.jpg" alt="avatar"/>
                  <span>{data.getAuthor.firstName} {data.getAuthor.lastName}</span>
                  <span className="username">{data.getAuthor.username}</span>
                </a>
              </div>
            </div>
            <div className="right">
              <ul className="posts">
                {listOfPosts}
              </ul>
            </div>
          </div>
        );
      }}
    </Query>;
  }
}

export default Author;