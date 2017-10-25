import React, { Component } from 'react';
// import './BackBtn.scss';

class BackBtn extends Component {
  render() {
    return (
      <div className="nav" onClick={() => this.props.setCurrentPage && this.props.setCurrentPage(Number(this.props.pageNum) || 0)}>
        <div className="nav-arrow -js-goto-startpage" name="back" tabIndex="1">
        </div>
      </div>
    );
  }
}
  
export default BackBtn;

