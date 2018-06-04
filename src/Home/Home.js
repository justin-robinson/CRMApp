import React, {Component} from 'react';
import config from 'react-global-configuration'

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
      .then(post => {
        this.setState({posts: post});
      });
  }

  render() {
    const listOfPosts = this.state.posts.map(post =>
      <li><a href={`post/${post.postId}`}>{post.postId}</a></li>
    );
    return (
      <ul>
        {listOfPosts}
      </ul>
    );
  }
}

export default Home;