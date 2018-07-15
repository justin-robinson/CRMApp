import React, {Component} from 'react';
import './Post.scss';
import Author from '../Author/Author';
import Markdown from './Markdown';
import ScrollPositionIndicator from '../ScrollPositionIndicator/ScrollPositionIndicator';
import {Query} from 'react-apollo';
import postWithAuthor from '../Queries/PostWithAuthor';

class Post extends Component {

  render () {

    let postId = this.props.postId || (this.props.match && this.props.match.params.postId) || null;

    return <Query query={postWithAuthor} variables={{ postId }}>
      {({loading, error, data}) => {
        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error :(</p>;

        return (<div className="post">
          <ScrollPositionIndicator/>
          <Author isPreview={true} author={data.getPost.author} authorId={data.getPost.authorId}/>
          <h2>{data.getPost.title}</h2>
          <div className="content-container">
            <div className="content">
              <Markdown content={data.getPost.content}/>
            </div>
          </div>
          <pre>Last Modified: {data.getPost.updateTime}</pre>
        </div>);
      }}
    </Query>
  }
}

export default Post;