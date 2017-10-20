import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Menu from '../Menu/Menu';
import BackBtn from '../BackBtn/BackBtn';
import Clock from '../Clock/Clock';
import MenuViewCollection from '../MenuView/MenuViewCollection';
import MenuViewDefault from '../MenuView/MenuViewDefault';

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
          <Link to={`/collection`} key={index}>
            <MenuViewCollection
              count={collection.count}
              index={index}
              name={collection.name}
              key={index}
            />
          </Link>
        )
      : <MenuViewDefault option={this.state.selectedOption} />
  );

  render() {
    return ([
      <div className="nav-wrapper">
        <BackBtn />
        {this.state.isShowMenu
          ? <Menu
              handeMouseEnter={this.handleOptionHover}
              handeOptionClick={this.handeOptionClick}
            />
          : null
        }
      </div>,
      <div className="wrapper">
        <Clock />
        <div className="collection-wrapper">
          {this.renderSelectedOption()}
        </div>
      </div>
    ]);
  }
}
  
export default CataloguePage;

