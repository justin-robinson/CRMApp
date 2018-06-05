import React, {Component} from 'react';
import config from 'react-global-configuration';
import './Author.css'

class Author extends Component {

  state = {
    author: {}
  }

  async fetchData () {
    let authorId = this.props.authorId || (this.props.match && this.props.match.params.authorId) || null;
    if (authorId === null || this.state.author.authorId === authorId) {
      return null;
    }
    let results = await fetch(`${config.get('apiUrl')}authors/${authorId}`);
    let author = await results.json();

    console.log(author);

    this.setState({
      author: author
    });
  }

  async componentDidMount() {
    await this.fetchData();
  }

  async componentDidUpdate () {
    await this.fetchData();
  }

  render () {
    return (
      <div class="author-container">
        <img class="avatar" src="/avatar-default.jpg" alt="avatar"/>
        <span class="username">{this.state.author.username}</span>
        <span>{this.state.author.firstName} {this.state.author.lastName}</span>
      </div>
    );
  }
}

export default Author;