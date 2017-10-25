import React, { Component } from 'react';
import MenuOption from '../MenuOption/MenuOption'
import './Menu.scss';

const menuOptions = [
  { option: 'Featured' },
  { option: 'Recently Added' },
  { option: 'Best of Catch-Up' },
  { option: 'Subscriptions' },
  { option: 'Collections', link: '/collections' },
  { option: 'Browse' }
]

class Menu extends Component {
  render() {
    return (
      <div className={`nav-hidden ${this.props.isShow ? '' : 'hide-menu'}`}>
        <div className="nav-hidden__holder">
          <span className="nav-hidden-title">Catalogue</span>
          <div id="jsNavList" className="nav-hidden-list">
            {menuOptions.map(option => 
              <MenuOption
                handeClick={this.props.handeOptionClick}
                handeMouseEnter={this.props.handeMouseEnter}
                key={option.option}
                link={option.link}
                option={option.option}
                selectedOption={this.props.selectedOption}
              />)
            }
          </div>
        </div>
      </div>
    );
  }
}
  
  export default Menu;

