/* eslint react/prefer-stateless-function: 0 */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { KEY_ENTER } from '../../utils/keys';

class MenuViewCollection extends Component {
  constructor(props) {
    super(props);
    this.state = { width: 0 };
  }

  componentDidMount() {
    if (this.state.width !== ReactDOM.findDOMNode(this).getBoundingClientRect().width) {
      this.setState({ width: ReactDOM.findDOMNode(this).getBoundingClientRect().width });
    }
  }

  getTranslateValue = () => {
    return this.props.isShowMenu
      ? 0
      : -((this.props.selectedCollectionIndex * this.state.width) - (this.state.width / 1.7));
  }

  handleKeyDown = event => {
    if (event.keyCode === KEY_ENTER) {
      this.props.setCurrentPage(1);
    } else {
      this.props.onKeyDown && this.props.onKeyDown(event, this.props.index);
    }
  }

  render() {
    return (
      <div
        className="collection -js-goto-innerpage"
        onClick={() => { this.props.setCurrentPage(1); }}
        onKeyDown={this.handleKeyDown}
        role="button"
        style={{ transform: `translateX(${this.getTranslateValue()}px)` }}
        tabIndex="1"
      >
        <div className="collection-back__one" />
        <div className="collection-back__two" />
        <div className={`collection-holder collection-bg${this.props.index + 1}`}>
          <div className="collection-text">
            <span className="collection-title">Collection</span>
            <span className="collection-subtitle">{this.props.name}</span>
          </div>
          <div className="collection-count">
            <div className="collection-count-holder">
              <span className="collection-count__icon" />
              <span className="collection-count__count">{this.props.count}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MenuViewCollection;

