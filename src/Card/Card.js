import React, { Component } from 'react';
import './Card.scss';


function start() {
  console.log('START');
}

class Card extends Component {
  render() {
    return (
      <div className="card" name="card" tabIndex="2">
        <div className={`card-body body-bg${this.props.pic}`}>
            <span className="card-title">{this.props.title}</span>
            <span className="card-title-hide">{this.props.name}</span>
            <button onclick='start();'>START</button>
        </div>
      </div>
    );
  }     
}
  
export default Card;




