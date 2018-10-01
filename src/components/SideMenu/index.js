import React, { Component, Fragment } from 'react';
import CloseButtonImage from '../../assets/images/side_menu/x.svg';
import HomeActive from '../../assets/images/side_menu/btn_mn_home_s.svg';
import HomeInactive from '../../assets/images/side_menu/btn_mn_home_n.svg';
// import AboutActive from '../../assets/images/side_menu/btn_mn_about_s.svg';
// import AboutInactive from '../../assets/images/side_menu/btn_mn_about_n.svg';
import WorksActive from '../../assets/images/side_menu/btn_mn_works_s.svg';
import WorksInactive from '../../assets/images/side_menu/btn_mn_works_n.svg';
import DesignersActive from '../../assets/images/side_menu/btn_mn_designers_s.svg';
import DesignersInactive from '../../assets/images/side_menu/btn_mn_designers_n.svg';
import TumblbugActive from '../../assets/images/side_menu/btn_mn_tumblbug_s.svg';
import TumblbugInactive from '../../assets/images/side_menu/btn_mn_tumblbug_n.svg';
import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';
import { withRouter } from 'react-router';

const Container = styled.aside`
  position: fixed;
  top: 0;
  left: -453px;
  width: 420px;
  height: 100vh;
  background: #FFF;
  border: 2px solid #4A4A4A;
  box-shadow: 33px 25px 0 #4A4A4A;
  z-index: 20;
  transition: left 500ms ease-in-out;
  
  &:before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 11px;
    background: linear-gradient(225.07deg, #97E055 0%, #80C9F6 50.68%, #A37CD8 100%);
  }
  
  ${props => props.visible && css`
    left: 0;
  `}
`;

const CloseButton = styled.button`
  position: absolute;
  top: 46px;
  right: 36px;
  display: inline-block;
  width: 32px;
  height: 32px;
  border: none;
  background: url(${CloseButtonImage}) no-repeat center;
  background-size: cover;
  
  &:focus {
    outline: none;
  }
`;

const LinksContainer = styled.ul`
  margin-top: 183px;
  margin-left: 97px;
`;

const Links = styled.li`
  margin-bottom: 98px;
  text-align: left;
`;

const DefaultLink = styled(NavLink)`
  display: inline-block;
  height: 30px;
	width: 100%;
	background-position: left;
	background-repeat: no-repeat;
  background-size: contain;
  transition: background 500ms ease-in-out;
`;

const HomeLink = styled(DefaultLink)`
  background-image: url(${HomeInactive});
  
  &.active {
    background-image: url(${HomeActive});    
  }
`;

// const AboutLink = styled(DefaultLink)`
//   background-image: url(${AboutInactive});
//
//   &.active {
//     background-image: url(${AboutActive});
//   }
// `;

const WorksLink = styled(DefaultLink)`
  background-image: url(${WorksInactive});
  
  &.active {
    background-image: url(${WorksActive});    
  }
`;

const DesignersLink = styled(DefaultLink)`
  background-image: url(${DesignersInactive});
  
  &.active {
    background-image: url(${DesignersActive});    
  }
`;

const TumblbugLink = styled(DefaultLink)`
  background-image: url(${TumblbugInactive});
  
  &.active {
    background-image: url(${TumblbugActive});    
  }
`;

class SideMenu extends Component {
  render() {
    const { visible, onClose } = this.props;
    return (
      <Fragment>
        <Container visible={visible}>
          <CloseButton onClick={onClose}/>
          <LinksContainer>
            <Links><HomeLink onClick={onClose} to="/" exact activeClassName="active"/></Links>
            {/*<Links><AboutLink onClick={onClose} to="/" exact activeClassName="active"/></Links>*/}
            <Links><WorksLink onClick={onClose} to="/works" activeClassName="active"/></Links>
            <Links><DesignersLink onClick={onClose} to="/designers" activeClassName="active"/></Links>
            <Links><TumblbugLink onClick={onClose} to="/tumblbug" activeClassName="active"/></Links>
          </LinksContainer>
        </Container>
      </Fragment>
    );
  }
}

export default withRouter(SideMenu);
