import React, { Component } from 'react';
import { Link } from 'react-router-dom'
// import './BackBtn.css';

class BackBtn extends Component {
  render() {
    return (
      <Link to={this.props.link || '/'}>
        <div className="nav">
          <div className="nav-arrow -js-goto-startpage" name="back" tabIndex="1">
          </div>
        </div>
      </Link>
    );
  }
}
  
export default BackBtn;

