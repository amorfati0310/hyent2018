import React, { Fragment, PureComponent } from 'react';
import styled from 'styled-components';
import { DefaultSection } from './Partials';

const LocationSection = styled(DefaultSection)``;

class Location extends PureComponent {
  render() {
    return (
      <Fragment>
        <LocationSection className="section location"/>
      </Fragment>
    );
  }
}

export default Location;
