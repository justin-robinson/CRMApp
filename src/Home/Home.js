import React, {Component} from 'react';
import config from 'react-global-configuration'
import PostPreview from '../Post/Preview';
import './Home.scss';

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      posts: []
    }
  }

  componentDidMount() {
    fetch(`${config.get('apiUrl')}posts/`)
      .then(results => {
        return results.json();
      })
      .then(posts => {
        this.setState({posts: posts});
      });
  }

  render() {
    const listOfPosts = this.state.posts.map(post =>
      <li key={post.postId} className="post">
        <PostPreview post={post}/>
      </li>
    );
    return (
      <ul className="posts">
        {listOfPosts}
      </ul>
    );
  }
}

export default Home;