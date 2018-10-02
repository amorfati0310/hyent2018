import React, { Component, Fragment } from 'react';
import SideMenu from './components/SideMenu';
import { Route, Switch } from 'react-router';
import About from './pages/About';
import GlobalHeader from './components/GlobalHeader';
import Tumblbug from './pages/Tumblbug';
import Designers from './pages/Designers';
import Works from './pages/Works';
import DesignerProfile from './pages/DesignerProfile';
import WorkDetail from './pages/WorkDetail';


class App extends Component {


  constructor(props) {
    super(props);
    this.state = {
      sideMenuVisible: false
    };
  }

  toggleMenu = () => {
    this.setState({ sideMenuVisible: !this.state.sideMenuVisible });
  };

  render() {
    return (
      <Fragment>
        <GlobalHeader menuOnClick={this.toggleMenu}/>
        <SideMenu visible={this.state.sideMenuVisible} onClose={this.toggleMenu}/>
        <Switch>
          <Route path="/" exact component={About}/>
          <Route path="/works"
                 render={routeProps => (
                   <Works
                     {...routeProps}
                     sideVisible={this.state.sideMenuVisible}
                     handleSideMenu={this.toggleMenu}/>)
                 }/>
          <Route path="/work/digital/:id"
                 render={routeProps => (
                   <WorkDetail
                     {...routeProps}
                     sideVisible={this.state.sideMenuVisible}
                     handleSideMenu={this.toggleMenu}/>)
                 }/>
          <Route path="/work/interactive/:id"
                 render={routeProps => (
                   <WorkDetail
                     {...routeProps}
                     sideVisible={this.state.sideMenuVisible}
                     handleSideMenu={this.toggleMenu}/>)
                 }/>
          <Route path="/work/motion/:id"
                 render={routeProps => (
                   <WorkDetail
                     {...routeProps}
                     sideVisible={this.state.sideMenuVisible}
                     handleSideMenu={this.toggleMenu}/>)
                 }/>
          <Route path="/designers" exact
                 render={routeProps => (
                   <Designers
                     {...routeProps}
                     sideVisible={this.state.sideMenuVisible}
                     handleSideMenu={this.toggleMenu}/>)
                 }/>
          <Route path="/designer/:id" render={routeProps => (
            <DesignerProfile
              {...routeProps}
              sideVisible={this.state.sideMenuVisible}
              handleSideMenu={this.toggleMenu}/>)
            }/>
          <Route path="/tumblbug" component={Tumblbug}/>
        </Switch>
      </Fragment>
    );
  }
}

export default App;
