import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import MenuButton from './MenuButton';
import SearchForm from './SearchForm';

// TODO: Add hamburger button and search form

const Header = styled.header`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 39px 0 50px;
  width: 100%;
  height: 120px;
  top: 0;
  background-color: #FFF;
  z-index: 10;
`;

class GlobalHeader extends Component {
  render() {
    const { menuOnClick } = this.props;
    return (
      <Fragment>
        <Header className="global-header">
          <MenuButton onClick={menuOnClick}/>
          <SearchForm/>
        </Header>
      </Fragment>
    );
  }
}

export default GlobalHeader;
