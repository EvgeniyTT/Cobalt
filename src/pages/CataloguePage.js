import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Menu from '../Menu/Menu';
import BackBtn from '../BackBtn/BackBtn';
import Clock from '../Clock/Clock';
import MenuViewCollection from '../MenuView/MenuViewCollection';
import MenuViewDefault from '../MenuView/MenuViewDefault';
import './CataloguePage.scss';
import './CollectionPage.scss';
const baseUrl = process.env.PUBLIC_URL; 

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
          // <Link to={`${baseUrl}/collection`} key={index}>
            <MenuViewCollection
              count={collection.count}
              index={index}
              name={collection.name}
              key={index}
              onClick={() => {console.log('CLICK CLIK CLICK');}}
            />
          // </Link>
        )
      : <MenuViewDefault option={this.state.selectedOption} />
  );

  render() {
    return ([
      <div className="nav-wrapper">
        <BackBtn onClick={() => {console.log('BABABAB');  this.setState({isShowMenu: true})}} />
        <Menu
          isShow={this.state.isShowMenu}
          handeMouseEnter={this.handleOptionHover}
          handeOptionClick={this.handeOptionClick}
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

