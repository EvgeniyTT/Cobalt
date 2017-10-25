import React, { Component } from 'react';
// import './BackBtn.scss';
const KEY_ENTER = 13;

class BackBtn extends Component {

  handleKeyDown = event => {
    if (event.keyCode === KEY_ENTER) {
      this.props.setCurrentPage && this.props.setCurrentPage(Number(this.props.pageNum) || 0);
    } else {
      this.props.onKeyDown(event)
    }
  }
  render() {
    return (
      <div
        className="nav-arrow -js-goto-startpage"
        name="back"
        onClick={() => this.props.setCurrentPage && this.props.setCurrentPage(Number(this.props.pageNum) || 0)}
        onKeyDown={this.handleKeyDown}
        tabIndex="1">
      </div>
    );
  }
}
  
export default BackBtn;

