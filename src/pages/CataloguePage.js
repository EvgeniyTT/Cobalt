/* eslint default-case: 0 */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Menu from '../components/Menu/Menu';
import BackBtn from '../components/BackBtn/BackBtn';
import Clock from '../components/Clock/Clock';
import MenuViewCollection from '../components/MenuView/MenuViewCollection';
import MenuViewDefault from '../components/MenuView/MenuViewDefault';
import { KEY_LEFT, KEY_RIGHT } from '../utils/keys';
// import './CataloguePage.scss';
// import './CollectionPage.scss';

const collections = [
  { name: 'Supperheroes', count: '22' },
  { name: 'Cartoons', count: '33' },
  { name: 'Thrillers', count: '25' }
];

class CataloguePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: 'Featured',
      isShowMenu: true
    };
  }

  focusBackBtn = () => {
    ReactDOM.findDOMNode(this.backBtn).focus();
    this.setState({ isFocusMenu: false });
  }

  handleOptionHover = option => {
    this.setState({ selectedOption: option });
  };

  hideMenu = () => {
    this.setState({ isShowMenu: false, isFocusMenu: false });
    if (ReactDOM.findDOMNode(this.collectionBtn0)) {
      ReactDOM.findDOMNode(this.collectionBtn0).focus();
    } else {
      ReactDOM.findDOMNode(this.backBtn).focus();
    }
  };

  showMenu = () => {
    this.setState({ isShowMenu: true, isFocusMenu: true });
  }

  handleCollectionNavigation = (event, index) => {
    switch (event.keyCode) {
      case KEY_LEFT:
        if (index > 0) ReactDOM.findDOMNode(this[`collectionBtn${index - 1}`]).focus();
        break;
      case KEY_RIGHT:
        if (index < collections.length - 1) ReactDOM.findDOMNode(this[`collectionBtn${index + 1}`]).focus();
        break;
    }
  }

  renderSelectedOption = () => (
    this.state.selectedOption === 'Collections'
      ? collections.map((collection, index) => (
        <MenuViewCollection
          count={collection.count}
          index={index}
          key={collection.name}
          name={collection.name}
          ref={node => { this[`collectionBtn${index}`] = node; }}
          onKeyDown={this.handleCollectionNavigation}
          setCurrentPage={this.props.setCurrentPage}
        />))
      : <MenuViewDefault option={this.state.selectedOption} />
  );

  render() {
    return ([
      <div className="nav-wrapper">
        <div className="nav">
          <BackBtn
            onClick={this.showMenu}
            onKeyDown={this.showMenu}
            ref={node => { this.backBtn = node; }}
          />
        </div>
        <Menu
          isShow={this.state.isShowMenu}
          focusBackBtn={this.focusBackBtn}
          isFocusMenu={this.state.isFocusMenu}
          onOptionFocus={this.handleOptionHover}
          handeOptionSelect={this.hideMenu}
          selectedOption={this.state.selectedOption}
        />
      </div>,
      <div className="wrapper">
        <Clock />
        <div className={`collection-wrapper ${this.state.isShowMenu ? '' : 'push-collection'}`}>
          {this.renderSelectedOption()}
        </div>
      </div>
    ]);
  }
}

export default CataloguePage;

