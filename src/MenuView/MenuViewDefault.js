import React, { Component } from 'react';

class MenuViewDefault extends Component {
  render() {
    return (
      <div class="collection-inner-title">
        <span class="nav-inner-title">{this.props.option}</span>
      </div>
    );
  }
}
  
export default MenuViewDefault;

