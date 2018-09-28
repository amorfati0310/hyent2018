import React, { Component, Fragment } from 'react';
import styled from 'styled-components';

// TODO: Add hamburger button and search form

const Header = styled.header`
  position: fixed;
  display: flex;
  width: 100%;
  height: 120px;
  top: 0;
  background-color: #FFF;
  z-index: 10;
`;

class GlobalHeader extends Component {
  render() {
    return (
      <Fragment>
        <Header className="global-header">

        </Header>
      </Fragment>
    );
  }
}

export default GlobalHeader;
