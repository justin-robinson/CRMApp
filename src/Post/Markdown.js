import React, {Component} from 'react';
import './Preview.scss';
import ReactMarkdown from 'react-markdown';
import './Markdown.scss';

class Markdown extends Component {

  state = {
    content: ''
  };

  updateState() {
    if (this.props.content === this.state.content) {
      return;
    }
    this.setState({
      content: this.props.content
    });
  }

  componentDidMount() {
    this.updateState();
  }

  componentDidUpdate () {
    this.updateState();
  }

  render() {
    return (
      <ReactMarkdown
        className="post-markdown"
        disallowedTypes={this.props.disallowedTypes}
        source={this.state.content}
      />
    );
  }
}

export default Markdown;