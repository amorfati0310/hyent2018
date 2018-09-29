import React, { Component, Fragment } from 'react';
import * as About from './components/About';
import GlobalHeader from './components/GlobalHeader';
import SideMenu from './components/SideMenu';


class App extends Component {
  render() {
    return (
      <Fragment>
        <GlobalHeader/>
        <SideMenu/>
        {/*<About.Container>*/}
          {/*<About.Entry/>*/}
          {/*<About.Intro/>*/}
          {/*<About.Concept/>*/}
          {/*<About.Location/>*/}
          {/*<About.Video/>*/}
          {/*<About.Congratulations/>*/}
          {/*<About.Footer/>*/}
        {/*</About.Container>*/}
      </Fragment>
    );
  }
}

export default App;
