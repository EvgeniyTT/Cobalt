import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import logo from './logo.svg';
import './base.css';
import './assets.css';
import CataloguePage from './pages/CataloguePage';
import CollectionPage from './pages/CollectionPage';
var baseUrl = process.env.PUBLIC_URL; 

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path={baseUrl + '/'} component={CataloguePage}/>
        <Route path={baseUrl + '/collection'} component={CollectionPage}/>
      </Switch>
    )
  }
}

export default App;
