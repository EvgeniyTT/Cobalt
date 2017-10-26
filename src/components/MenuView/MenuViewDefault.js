import React, { Component } from 'react';

class MenuViewDefault extends Component {
  render() {
    return (
      <div className="collection-inner-title">
        <span className="nav-inner-title">{this.props.option}</span>
      </div>
    );
  }
}
  
export default MenuViewDefault;

