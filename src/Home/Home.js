import React, {Component} from 'react';
import config from 'react-global-configuration'
import PostPreview from '../Post/Preview';
import './Home.scss';
import ApiFetcher from '../Utils/ApiFetcher'

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      posts: []
    }
  }

  async componentDidMount() {
    let posts = await ApiFetcher.fetch(
      `${config.get('apiUrl')}posts/`,
      null,
      {
        useCache: true,
        sessionOnlyCache: true
      }
    );
    this.setState({posts: posts});
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