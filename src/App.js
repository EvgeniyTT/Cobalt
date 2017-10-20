import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import logo from './logo.svg';
import './base.css';
import './assets.css';
import CataloguePage from './pages/CataloguePage';
import CollectionPage from './pages/CollectionPage';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={CataloguePage}/>
        <Route path='/collection' component={CollectionPage}/>
      </Switch>
    )
  }
}

export default App;
