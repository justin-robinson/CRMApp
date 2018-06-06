import React, {Component} from 'react';
import './ScrollPositionIndicator.scss';

class ScrollPositionIndicator extends Component {

  state = {
    percentage: 0
  };

  componentDidMount () {
    window.addEventListener('scroll', this.getScrollPercentage);
  }

  getScrollPercentage = () => {
    let documentHeight = Math.max(
      document.body.scrollHeight, document.documentElement.scrollHeight,
      document.body.offsetHeight, document.documentElement.offsetHeight,
      document.body.clientHeight, document.documentElement.clientHeight
    );

    let windowHeight = window.innerHeight || (document.documentElement || document.body).clientHeight;
    let scrollTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop;
    let trackLength = documentHeight - windowHeight;
    this.setState({
      percentage: scrollTop / trackLength * 100
    });
  }

  render () {
    const style = {
      width: `${this.state.percentage}%`
    }
    return (
      <div>
        <div className="scroll-position-indicator">
          <div className="scroll-position-indicator-inner" style={style}>
            &nbsp;
          </div>
        </div>
      </div>
    );
  }
}

export default ScrollPositionIndicator;