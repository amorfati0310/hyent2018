import React, { Fragment, PureComponent } from 'react';
import styled from 'styled-components';
import { DefaultSection } from './Partials';

const FooterSection = styled(DefaultSection)``;

class Footer extends PureComponent {
  render() {
    return (
      <Fragment>
        <FooterSection className="section footer"/>
      </Fragment>
    );
  }
}

export default Footer;
