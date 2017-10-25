import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import BackBtn from '../BackBtn/BackBtn';
import Clock from '../Clock/Clock';
import Card from '../Card/Card';
import './CollectionPage.scss';
import './CataloguePage.scss';

const cards = [
  {title: 'New Release', name: 'Alient: Covenant', rating: 7.5, releaseDate: '203/11/24', pic: 1},
  {title: 'Popular', name: 'Crimson Peak', rating: 7.7, releaseDate: '2010/12/24', pic: 2},
  {title: 'Lorem ipsum', name: 'Lorem ipsum', rating: 5.5, releaseDate: '2010/11/14', pic: 3},
  {title: 'Lorem ipsum', name: 'Lorem ipsum', rating: 8.5, releaseDate: '2010/05/09', pic: 4},
  {title: 'Lorem ipsum', name: 'Lorem ipsum', rating: 9.1, releaseDate: '2007/01/30', pic: 5},
  {title: 'Lorem ipsum', name: 'Lorem ipsum', rating: 6.5, releaseDate: '1995/12/31', pic: 6},
  {title: 'Lorem ipsum', name: 'Lorem ipsum', rating: 8.1, releaseDate: '1998/04/09', pic: 7},
  {title: 'Lorem ipsum', name: 'Lorem ipsum', rating: 9.0, releaseDate: '2015/03/11', pic: 8},
  {title: 'Lorem ipsum', name: 'Lorem ipsum', rating: 8.4, releaseDate: '2012/04/22', pic: 9},
  {title: 'Lorem ipsum', name: 'Lorem ipsum', rating: 6.3, releaseDate: '2013/09/07', pic: 10}
];

const sortOptions = [
  {text: 'A-Z', sortBy: 'name'},
  {text: 'Rating', sortBy: 'rating'},
  {text: 'Release Date', sortBy: 'releaseDate'}
]

const KEY_ENTER = 13;
const KEY_LEFT = 37;
const KEY_UP = 38;
const KEY_RIGHT = 39;
const KEY_DOWN = 40;
const CARDS_IN_ROW = 5;

class CollectionPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      isShowBuyBtn: true,
      isShowSortOptions: false,
      sorting: sortOptions[0].sortBy
    }
  }

  componentDidMount() {
    ReactDOM.findDOMNode(this.buyBtn).focus();
  }

  hideBuyBtn = () => {
    this.setState({ isShowBuyBtn: false });
    ReactDOM.findDOMNode(this.sortBtn).focus();
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

  handleBuyBtnKeyDown = event => {
    if (event.keyCode === KEY_ENTER) {
      this.hideBuyBtn();
    } else {
      this.handleKeyNavigation(event)
    }
  }

  handleSortKeyDown = event => {
    if (event.keyCode === KEY_ENTER) {
      this.setState({isShowSortOptions: !this.state.isShowSortOptions});
    } else {
      this.handleKeyNavigation(event)
    }
  }

  handleSortOptionKeyDown = (event, sortBy, index)=> {
    if (event.keyCode === KEY_ENTER) {
      this.setSortingCards(sortBy)
    } else {
      this.handleKeyNavigation(event, index)
    }
  }

  handleKeyNavigation = (event, index) => {
    if (this.buyBtn == document.activeElement) {
      switch (event.keyCode) {
        case KEY_LEFT:
          ReactDOM.findDOMNode(this.backBtn).focus();
          break;
        case KEY_RIGHT:
          ReactDOM.findDOMNode(this.sortBtn).focus();
          break;
        case KEY_DOWN:
          ReactDOM.findDOMNode(this.card0).focus();
          break;
      }
    } else if (event.target.getAttribute('name') === 'back') {
      switch (event.keyCode) {
        case KEY_RIGHT:
          ReactDOM.findDOMNode(this.buyBtn).focus();
          break;
      }
    } else if (this.sortBtn == document.activeElement) {
      switch (event.keyCode) {
        case KEY_LEFT:
          ReactDOM.findDOMNode(this.buyBtn).focus();
          break;
        case KEY_DOWN:
          if (this.state.isShowSortOptions) {
            ReactDOM.findDOMNode(this.sortOptionBtn0).focus();
          } else {
            ReactDOM.findDOMNode(this.card4).focus();
          }
          break;
      }
    } else if (event.target.className.includes('sort-card-list__item')) {
      switch (event.keyCode) {
        case KEY_DOWN:
          if (index < sortOptions.length - 1) ReactDOM.findDOMNode(this[`sortOptionBtn${index + 1}`]).focus();
          break;
        case KEY_UP:
          if (index === 0) {
            ReactDOM.findDOMNode(this.sortBtn).focus();
          } else {
            ReactDOM.findDOMNode(this[`sortOptionBtn${index - 1}`]).focus();
          }
          break;
      }
    } else if (event.target.getAttribute('name') === 'card') {
      switch (event.keyCode) {
        case KEY_LEFT:
          if (index === 0) {
            ReactDOM.findDOMNode(this.backBtn).focus();
          } else {
            ReactDOM.findDOMNode(this[`card${index - 1}`]).focus();
          }
          break;
        case KEY_RIGHT:
          if (index < cards.length - 1) ReactDOM.findDOMNode(this[`card${index + 1}`]).focus();
          break;
        case KEY_DOWN:
          if (index <= cards.length - CARDS_IN_ROW) ReactDOM.findDOMNode(this[`card${index + CARDS_IN_ROW}`]).focus();
          break;
        case KEY_UP:
          if (index < 3) {
            ReactDOM.findDOMNode(this.buyBtn).focus();
          } else if (index === 3 || index === 4) {
            ReactDOM.findDOMNode(this.sortBtn).focus();
          } else if (index >= CARDS_IN_ROW) {
            ReactDOM.findDOMNode(this[`card${index - CARDS_IN_ROW}`]).focus();
          }
          break;
      }
    }
  }

  render() {
    const sortedCards = cards.sort(this.sortItems);
    return ([
      <div className="nav-wrapper">
        <div className="nav">
          <BackBtn
            pageNum="2"
            onKeyDown={this.handleKeyNavigation}
            ref={node => {this.backBtn = node}}
            setCurrentPage={this.props.setCurrentPage}
          />
        </div>
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
                      onKeyDown={this.handleBuyBtnKeyDown}
                      ref={node => {this.buyBtn = node}}
                      tabIndex="1"
                    >
                      Buy all XXX
                      <span className="money-icon"></span>
                    </div>
                  : null 
                }
                <div className="sort-card" id="sortDropdown">
                  <div
                    className="sort-card__title"
                    name="sort-card__title"
                    onClick={() => {this.setState({isShowSortOptions: !this.state.isShowSortOptions})}}
                    onKeyDown={this.handleSortKeyDown}
                    ref={node => {this.sortBtn = node}}
                    tabIndex="1"
                  >
                    <span>Sort: <em>Release date</em></span>
                    <span className="icon"></span>
                  </div>

                  <div className={`sort-card-list ${this.state.isShowSortOptions ? 'active' : ''} `}>
                    {sortOptions.map((option, index) => (
                      <span
                        className={`sort-card-list__item ${this.state.sorting === option.sortBy ? 'active' : ''} `}
                        data-sort={option.text}
                        key={option.text}
                        onClick={() => {this.setSortingCards(option.sortBy)}}
                        onKeyDown={event => {this.handleSortOptionKeyDown(event, option.sortBy, index)}}
                        ref={node => {this['sortOptionBtn' + index] = node}}
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
                  onKeyDown={this.handleKeyNavigation}
                  pic={card.pic}
                  ref={node => {this['card' + index] = node}}
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

