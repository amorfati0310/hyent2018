import React, { Component, Fragment } from 'react';
import * as About from './components/About';
import GlobalHeader from './components/GlobalHeader';


class App extends Component {
  render() {
    return (
      <Fragment>
        <GlobalHeader/>
        <About.Container>
          {/*<About.Entry/>*/}
          {/*<About.Intro/>*/}
          <About.Concept/>
          <About.Location/>
          <About.Video/>
          <About.Congratulations/>
          <About.Video/>
        </About.Container>
      </Fragment>
    );
  }
}

export default App;
