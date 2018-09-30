import React, { Component, Fragment } from 'react';
import SideMenu from './components/SideMenu';
import { Route } from 'react-router';
import About from './pages/About';
import GlobalHeader from './components/GlobalHeader';
import Tumblbug from './pages/Tumblbug';
import Designers from './pages/Designers';
import DesignerProfile from './pages/DesignerProfile';
import WorkDetail from './pages/WorkDetail';


class App extends Component {
  render() {
    return (
      <Fragment>
        <GlobalHeader/>
        {/*<Route path="/" exact component={About}/>*/}
        {/*<Route path="/tumblbug" component={Tumblbug}/>*/}
        {/*<Route path="/designers" component={Designers}/>*/}
        {/*<Route path="/designer-profile" component={DesignerProfile}/>*/}
        <Route path="/work-detail" component={WorkDetail}/>
        {/*<SideMenu/>*/}
      </Fragment>
    );
  }
}

export default App;
