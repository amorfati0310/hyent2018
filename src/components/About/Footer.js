import React, { Fragment, PureComponent } from 'react';
import styled from 'styled-components';
import { DefaultSection, FlexContainer } from './Partials';
import LinkButtonWithBgColor from '../StyledPartials/LinkButtonWithBgColor';
import GoToTopButtonImage from '../../assets/images/footer/ic_gotop.svg';


const FooterSection = styled(DefaultSection)`
  background-color: #FFF;
  z-index: 0;
`;

const Container = styled(FlexContainer)`
  position: relative;
  align-items: center;
  //height: 733px;
`;

const GoToTopButton = styled.a`
  display: inline-block;
  position: absolute;
  height: 107px;
  width: 109px;
  bottom: 140px;
  right: 95px;
  border: none;
  background: url(${GoToTopButtonImage}) no-repeat center;
  background-size: cover;
  cursor: pointer;
`;

class Footer extends PureComponent {
  render() {
    return (
      <Fragment>
        {/*<FooterSection className="section fp-auto-height footer">*/}
        <FooterSection className="section footer">
          <Container>
            <LinkButtonWithBgColor to="/works">
              작품 보러 가기
            </LinkButtonWithBgColor>
            <GoToTopButton href="#about"/>
          </Container>
        </FooterSection>
      </Fragment>
    );
  }
}

export default Footer;
