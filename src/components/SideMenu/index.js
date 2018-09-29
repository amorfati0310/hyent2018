import React, { Fragment, PureComponent } from 'react';
import CloseButtonImage from '../../assets/images/side_menu/x.svg';
import HomeActive from '../../assets/images/side_menu/btn_mn_home_s.svg';
import HomeInactive from '../../assets/images/side_menu/btn_mn_home_n.svg';
import AboutActive from '../../assets/images/side_menu/btn_mn_about_s.svg';
import AboutInactive from '../../assets/images/side_menu/btn_mn_about_n.svg';
import WorksActive from '../../assets/images/side_menu/btn_mn_works_s.svg';
import WorksInactive from '../../assets/images/side_menu/btn_mn_works_n.svg';
import DesignersActive from '../../assets/images/side_menu/btn_mn_designers_s.svg';
import DesignersInactive from '../../assets/images/side_menu/btn_mn_designers_n.svg';
import TumblbugActive from '../../assets/images/side_menu/btn_mn_tumblbug_s.svg';
import TumblbugInactive from '../../assets/images/side_menu/btn_mn_tumblbug_n.svg';
import styled from 'styled-components';


const Container = styled.aside`
  position: relative;
  width: 420px;
  height: 100vh;
  background: #FFF;
  border: 2px solid #4A4A4A;
  box-shadow: 33px 25px 0 #4A4A4A;
  z-index: 20;
  
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
`;

const HomeLink = styled.a``;

class SideMenu extends PureComponent {
  render() {
    return (
      <Fragment>
        <Container>
          <CloseButton/>
        </Container>
      </Fragment>
    );
  }
}

export default SideMenu;
