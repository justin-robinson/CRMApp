import React, {Component} from 'react';
import config from 'react-global-configuration';
import './Author.scss'

class Author extends Component {

  state = {
    author: {}
  }

  async fetchData () {
    let authorId = this.props.authorId || (this.props.match && this.props.match.params.authorId) || null;
    if (authorId === null || this.state.author.authorId === authorId) {
      return null;
    }
    try {
      let results = await fetch(`${config.get('apiUrl')}authors/${authorId}`);
      let author = await results.json();

      this.setState({
        author: author
      });
    } catch (e) {
      console.log(`error fetching author ${authorId}`);
    }

  }

  async componentDidMount () {
    await this.fetchData();
  }

  async componentDidUpdate () {
    await this.fetchData();
  }

  render () {
    return (
      <div className="author-container">
        <img className="avatar" src="/avatar-default.jpg" alt="avatar"/>
        <span>{this.state.author.firstName} {this.state.author.lastName}</span>
        <span className="username">{this.state.author.username}</span>
      </div>
    );
  }
}

export default Author;