import React, {Component} from 'react';
import './Button.scss';

class Button extends Component {

  static defaultProps = {
    className: '',
    onClick: () => {}
  };

  getClassName() {
    return `button ${this.props.className}`
  }

  render() {
    return (
      <button className={this.getClassName()} onClick={this.props.onClick}>
        {this.props.children}
      </button>
    );
  }
}

export default Button;