import React, { Fragment, PureComponent } from 'react';
import styled from 'styled-components';
import { DefaultSection } from './Partials';

const CongratulationsSection = styled(DefaultSection)``;

class Congratulations extends PureComponent {
  render() {
    return (
      <Fragment>
        <CongratulationsSection className="section congratulations"/>
      </Fragment>
    );
  }
}

export default Congratulations;
