import React, { Fragment, PureComponent } from 'react';
import styled from 'styled-components';
import { DefaultSection } from './Partials';
import LinkButtonWithBgColor from '../StyledPartials/LinkButtonWithBgColor';

const FooterSection = styled(DefaultSection)`
  background-color: #FFF;
  z-index: 0;
`;

const Container = styled.div`
  //height: 733px;
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
          </Container>
        </FooterSection>
      </Fragment>
    );
  }
}

export default Footer;
