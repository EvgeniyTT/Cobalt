import React, { Component } from 'react';
import './bundle.css';
import CataloguePage from './pages/CataloguePage';
import CollectionPage from './pages/CollectionPage';

const viewport = {
  // viewportWidthMin: [1920, 2100, 2800, 3840],
  viewportWidthMax: [1024, 2048, 3840],
  // viewportHeightMin: [],
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
  
    // const minWidths = viewport.viewportWidthMin.filter(width => window.innerWidth >= width);
    const maxWidth = viewport.viewportWidthMax.find(width => window.innerWidth <= width);

    // console.log('minWidth: ', minWidths);
    console.log('minWidth: ', maxWidth);

    // const viewportWidthMinClasses = minWidths.length ? minWidths.map(width => ` viewport-width-min-${width}`).join('') : '';
    const viewportWidthMaxClass = maxWidth ? ` viewport-width-${maxWidth}` : '';

    return (
      <div className={`content-holder${viewportWidthMaxClass}`}>
        {this.renderContent()}
      </div>
    );
  }
}

export default App;
