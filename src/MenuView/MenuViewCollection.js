import React, { Component } from 'react';
import '../pages/CollectionPage.scss';

class MenuViewCollection extends Component {
  render() {
    return (
      <div className="collection -js-goto-innerpage" tabIndex="1">
        <div className="collection-back__one"></div>
        <div className="collection-back__two"></div>
        <div className={`collection-holder collection-bg${this.props.index + 1}`}>
          <div className="collection-text">
            <span className="collection-title">Collection</span>
            <span className="collection-subtitle">{this.props.name}</span>
          </div>
          <div className="collection-count">
            <div className="collection-count-holder">
              <span className="collection-count__icon"></span>
              <span className="collection-count__count">{this.props.count}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
  
export default MenuViewCollection;

