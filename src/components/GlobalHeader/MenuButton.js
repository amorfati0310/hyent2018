import React, { Fragment, PureComponent } from 'react';
import MenuButtonImage from '../../assets/images/header/ic_menu.svg';
import styled from 'styled-components';


// TODO: Create button action with redux
const Button = styled.button`
  display: inline-block;
  height: 38px;
  width: 46px;
  background: url(${MenuButtonImage}) no-repeat center;
  background-size: cover;
  border: none;
  cursor: pointer;
  
  &:focus {
    outline: none;
  }
`;

class MenuButton extends PureComponent {
  render() {
    return (
      <Fragment>
        <Button onClick={this.props.onClick}/>
      </Fragment>
    );
  }
}

export default MenuButton;
