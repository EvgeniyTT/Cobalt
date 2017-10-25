import React, { Component } from 'react';
import Menu from '../Menu/Menu';
import BackBtn from '../BackBtn/BackBtn';
import Clock from '../Clock/Clock';
import MenuViewCollection from '../MenuView/MenuViewCollection';
import MenuViewDefault from '../MenuView/MenuViewDefault';
import './CataloguePage.scss';
import './CollectionPage.scss';

const collections = [
  {name: 'Supperheroes', count: '22'},
  {name: 'Cartoons', count: '33'},
  {name: 'Supperheroes', count: '25'}
] 

class CataloguePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: 'Featured',
      isShowMenu: true
    }
  };

  handleOptionHover = option => {
    this.setState({ selectedOption: option });
  };

  handeOptionClick = () => {
    this.setState({ isShowMenu: false });
  };

  renderSelectedOption = () => (
    this.state.selectedOption  === 'Collections'
      ? collections.map((collection, index) => 
          <MenuViewCollection
            count={collection.count}
            index={index}
            name={collection.name}
            key={index}
            setCurrentPage={this.props.setCurrentPage}
          />
        )
      : <MenuViewDefault option={this.state.selectedOption} />
  );

  render() {
    return ([
      <div className="nav-wrapper">
        <div className="nav">
          <BackBtn
            onClick={() => { this.setState({isShowMenu: true}) }}
          />
        </div>
        <Menu
          isShow={this.state.isShowMenu}
          handeMouseEnter={this.handleOptionHover}
          handeOptionClick={this.handeOptionClick}
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

