import React, { Component } from 'react';
import './Clock.scss';

class Clock extends Component {
  render() {
    return (
       <div className="time">
        <span id="time" className="time-count">16:45</span>
        <span id="date" className="time-day">20 mar</span>
      </div>
    );
  }
}
  
export default Clock;

