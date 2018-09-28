import React, { Fragment, PureComponent } from 'react';
import styled from 'styled-components';
import { DefaultSection } from './Partials';

const ConceptSection = styled(DefaultSection)`
  background-color: #80C9F6;
`;

class Concept extends PureComponent {
  render() {
    return (
      <Fragment>
        <ConceptSection className="section concept"/>
      </Fragment>
    );
  }
}

export default Concept;
