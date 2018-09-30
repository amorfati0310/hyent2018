import React, { Component, Fragment } from 'react';
import SideMenu from './components/SideMenu';
import { Route } from 'react-router';
import About from './pages/About';
import GlobalHeader from './components/GlobalHeader';
import Tumblbug from './pages/Tumblbug';
import Designers from './pages/Designers';
import Works from './pages/Works';
import DesignerProfile from './pages/DesignerProfile';
import WorkDetail from './pages/WorkDetail';


class App extends Component {
  state = {
    sideMenuVisible: false
  };

  toggleMenu = () => {
    this.setState({ sideMenuVisible: !this.state.sideMenuVisible });
  };

  render() {
    return (
      <Fragment>
        <GlobalHeader menuOnClick={this.toggleMenu}/>
        <SideMenu visible={this.state.sideMenuVisible} onClose={this.toggleMenu}/>
        <Route path="/" exact component={About}/>
        <Route path="/works" component={Works}/>
        <Route path="/work/digital/:id" component={WorkDetail}/>
        <Route path="/work/interactive/:id" component={WorkDetail}/>
        <Route path="/work/motion/:id" component={WorkDetail}/>
        <Route path="/designers" exact component={Designers}/>
        <Route path="/designer/:id" component={DesignerProfile}/>
        <Route path="/tumblbug" component={Tumblbug}/>
      </Fragment>
    );
  }
}

export default App;
