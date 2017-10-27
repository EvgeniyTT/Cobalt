/* eslint react/prefer-stateless-function: 0 */
import React, { Component } from 'react';

class MenuViewDefault extends Component {
  constructor(props) {
    super(props);
    this.state = { option: props.option };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ option: nextProps.option });
  }

  render() {
    return (
      <div className="catalogue-wrapper">
        <div className="catalogue-inner-title">
          <span className="nav-inner-title">{this.state.option}</span>
        </div>
      </div>
    );
  }
}

export default MenuViewDefault;
