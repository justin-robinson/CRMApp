import React, {Component} from 'react';
import PostPreview from '../Post/Preview';
import './Home.scss';
import { Query } from 'react-apollo';
import listPostsWithAuthor from '../Queries/ListPostsWithAuthors';

class Home extends Component {

  render() {

    return <Query query={listPostsWithAuthor}>
      {({ loading, error, data }) => {
        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error :(</p>;

        const listOfPosts = data.listPost.items.map(
          (post) => (
              <li key={post.postId} className="post">
                <PostPreview post={post}/>
              </li>
        ));
        return (
          <ul className="posts">
            {listOfPosts}
          </ul>
        );
      }}
    </Query>
  }
}

export default Home;