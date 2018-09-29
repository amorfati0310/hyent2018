import React, { Fragment, PureComponent } from 'react';
import styled from 'styled-components';
import { DefaultSection } from './Partials';

const FooterSection = styled(DefaultSection)`
  background-color: #FFF;
`;

const Container = styled.div`
  height: 733px;
`;

class Footer extends PureComponent {
  render() {
    return (
      <Fragment>
        <FooterSection dataPercentage="80" className="section fp-auto-height footer">
          <Container>

          </Container>
        </FooterSection>
      </Fragment>
    );
  }
}

export default Footer;
