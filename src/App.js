import React, { Component } from 'react';
import './bundle.css';
import CataloguePage from './pages/CataloguePage';
import CollectionPage from './pages/CollectionPage';

const viewport = {
  viewportWidthMin: [1920, 2100, 2800, 3840],
  viewportWidthMax: [1024, 1110, 1180, 1280, 1320, 1366, 1400, 1550, 1800, 1920, 2048, 2200, 2560, 3200, 3355, 3840],
  viewportHeightMin: [],
  viewportHeightMax: []
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { currentPageNum: 0, isCatalogUnmounted: true, isCollectionUnmounted: true };
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
    console.log('window.innerWidth: ', window.innerWidth);
    console.log('window.innerHeight: ', window.innerHeight);
    console.log('document.documentElement.clientWidth: ', document.documentElement.clientWidth);
    console.log('document.documentElement.clientWidth: ', document.documentElement.clientHeight);
  
    const minWidth = viewport.viewportWidthMin.find(width => window.innerWidth >= width);
    const maxWidth = viewport.viewportWidthMin.find(width => window.innerWidth <= width);

    const viewportWidthMinClass = minWidth ? `viewport-width-min-${minWidth}` : '';
    const viewportWidthMaxClass = minWidth ? `viewport-width-max-${maxWidth}` : '';

    return (
      <div className={`content-holder ${viewportWidthMinClass} ${viewportWidthMaxClass}`}>
        {this.renderContent()}
      </div>
    );
  }
}

export default App;
