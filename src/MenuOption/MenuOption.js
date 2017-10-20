import React, { Component } from 'react';

class MenuOption extends Component {
  render() {
    return (
      <div
        className="nav-hidden-list__item"
        name="menu_item"
        tabIndex="1"
        onMouseEnter={() => {this.props.handeMouseEnter(this.props.option)}}
        onClick={this.props.handeClick}
      >
        <span className="navHiddenItem" tabIndex="1">{this.props.option}</span>
      </div>
    );
  }
}
  
export default MenuOption;

