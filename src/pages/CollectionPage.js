import React, { Component } from 'react';
import BackBtn from '../BackBtn/BackBtn';
import Clock from '../Clock/Clock';
import Card from '../Card/Card';

const cards = [
  {title: 'New Release', name: 'Alient: Covenant'},
  {title: 'Popular', name: 'Crimson Peak'},
  {title: 'Lorem ipsum', name: 'Lorem ipsum'},
  {title: 'Lorem ipsum', name: 'Lorem ipsum'},
  {title: 'Lorem ipsum', name: 'Lorem ipsum'},
  {title: 'Lorem ipsum', name: 'Lorem ipsum'},
  {title: 'Lorem ipsum', name: 'Lorem ipsum'},
  {title: 'Lorem ipsum', name: 'Lorem ipsum'},
  {title: 'Lorem ipsum', name: 'Lorem ipsum'},
  {title: 'Lorem ipsum', name: 'Lorem ipsum'}
];

const sortOptions = [
  {text: 'A-Z', sortBy: 'name'},
  {text: 'Rating', sortBy: 'rating'},
  {text: 'Release Date', sortBy: 'releaseDate'}
]

class CollectionPage extends Component {
  constructor(props){
    super(props)
    this.state = {
      isShowBuyBtn: true,
      sorting: sortOptions[0].sortBy
    }
  }

  hideBuyBtn = () => {
    this.setState({isShowBuyBtn: false})
  }

  setSortingCards = sorting => {
    this.setState({ sorting })
  }

  sortItems = (a,b) => (
    a[this.state.sorting] > b[this.state.sorting])
      ? 1
      : ((b[this.state.sorting] > a[this.state.sorting])
        ? -1
        : 0
  );

  render() {
    const sortedCards = cards.sort(this.sortItems);
    return ([
      <div className="nav-wrapper">
        <BackBtn link="/" />
      </div>,
      <div className="wrapper wrapper--inner">
        <Clock />
        <div className="content-container">
            <div className="description">
            <div className="description-text">
                <span className="description-text__subtitle">Collections</span>
                <span className="description-text__title">Best of 2017</span>  
                <div className="description-text__count">
                <span className="icon"></span>
                <span className="descroption-title">22 Titles</span>
                </div>
                <div className="description-text__desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor 
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat 
                nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
                sunt in culpa qui officia deserunt mollit anim id est laborum. 
                </div>
            </div>
            <div className="description-action">
                {this.state.isShowBuyBtn
                  ? <div
                      className="btn"
                      name="buy"
                      onClick={this.hideBuyBtn}
                      tabIndex="1"
                    >
                      Buy all XXXX
                      <span className="money-icon"></span>
                    </div>
                  : null 
                }
                
                <div className="sort-card" id="sortDropdown">
                <div className="sort-card__title" name="sort-card__title" tabIndex="1">
                    <span>Sort: <em>Release date</em></span>
                    <span className="icon"></span>
                </div>
                <div className="sort-card-list">
                  {sortOptions.map(option => (
                    <span
                      className="sort-card-list__item"
                      data-sort={option.text}
                      onClick={() => {this.setSortingCards(option.sortBy)}}
                      tabIndex="1"
                    >
                      {option.text}
                    </span>
                  ))}
                     </div>
                </div>
            </div>
            </div>
            <div className="content">
            <div className="content-row">
              {sortedCards.map((card, index) => 
                <Card
                  index={index}
                  key={index}
                  name={card.name}
                  title={card.title}
                />
              )}
            </div>
            </div>
        </div>
      </div>
    ]);
  }
}
  
export default CollectionPage;

