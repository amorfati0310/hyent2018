import React, { Fragment } from 'react';
import styled from 'styled-components';

const Container = styled.aside`
  position: relative;
  float: left;
  width: 249px;
  height: 100vh;
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 75%;
    width: 1px;
    background-color: #FFF;
    bottom: -9999px;
  }
  margin-right: ${props => props.marginRight && `${props.marginRight}px`}
`;


const SideLine = ({ marginRight }) => {
  return (
    <Fragment>
      <Container marginRight={marginRight}/>
    </Fragment>
  );
};


export default SideLine;
