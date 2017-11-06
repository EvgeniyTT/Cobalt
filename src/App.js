import React, { Component } from 'react';
import './bundle.css';
import CataloguePage from './pages/CataloguePage';
import CollectionPage from './pages/CollectionPage';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { currentPageNum: 0, isCatalogUnmounted: true, isCollectionUnmounted: true };

    // viewport-max-1024
    // viewport-max-1280
    // viewport-max-1320
    // viewport-max-1366
    // viewport-max-1400
    // viewport-max-1550
    // viewport-max-1800
    // viewport-max-1920
    // viewport-max-2048
    // viewport-min-2100
    // viewport-max-2560

    console.log('***************************************************************************');
    console.log('window.innerWidth: ', window.innerWidth);
    console.log('window.innerHeight: ', window.innerHeight);
    console.log('document.documentElement.clientWidth: ', document.documentElement.clientWidth);
    console.log('document.documentElement.clientWidth: ', document.documentElement.clientHeight);
    console.log('***************************************************************************');

    this.viewportWindow = { width: window.innerWidth, height: window.innerHeight };
    this.viewportDocument = { width: document.documentElement.clientWidth, height: document.documentElement.clientHeight };

  }

  setCurrentPage = pageNum => {
    this.setState({ currentPageNum: pageNum });
  }

  // experiment, attempt to fix a mess on TV when pages are switched
  setCatalogUnmounted = mount => {
    this.setState({ isCatalogUnmounted: mount });
  }

  setCollectionUnmounted = mount => {
    this.setState({ isCollectionUnmounted: mount });
  }

  renderContent = () => {
    switch (this.state.currentPageNum) {
      case 0:
        return (
          <CataloguePage
            viewportWindow={this.viewportWindow}
            viewportDocument={this.viewportDocument}
            isCollectionUnmounted={this.state.isCollectionUnmounted}
            key="defaultCatalog"
            setCatalogUnmounted={this.setCatalogUnmounted}
            setCurrentPage={this.setCurrentPage}
          />
        );
      case 1:
        return (
          <CollectionPage
            isCatalogUnmounted={this.state.isCatalogUnmounted}
            key="collection"
            setCollectionUnmounted={this.setCollectionUnmounted}
            setCurrentPage={this.setCurrentPage}
          />
        );
      default:
        return (
          <CataloguePage
            isCollectionUnmounted={this.state.isCollectionUnmounted}
            key="defaultCatalog"
            setCatalogUnmounted={this.setCatalogUnmounted}
            setCurrentPage={this.setCurrentPage}
          />
        );
    }
  }

  render() {
    return (
      <div className="content-holder viewport-max-1024">
        {this.renderContent()}
      </div>
    );
  }
}

export default App;
