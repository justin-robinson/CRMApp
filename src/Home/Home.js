import React, {Component} from 'react';
import config from 'react-global-configuration'
import PostUrl from '../Post/Url';

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
      <li><PostUrl post={post}/></li>
    );
    return (
      <ul>
        {listOfPosts}
      </ul>
    );
  }
}

export default Home;