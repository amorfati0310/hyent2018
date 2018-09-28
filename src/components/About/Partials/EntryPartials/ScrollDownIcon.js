import ScrollIconBack from '../../../../assets/images/about/scroll_icon_back@3x.svg';
import ScrollIconFront from '../../../../assets/images/about/scroll_icon_front@3x.svg';
import React, { Fragment } from 'react';
import styled, { keyframes } from 'styled-components';

const jumping = keyframes`
  from {
    transform: translateY(0px);
  }
  25% {
    transform: translateY(5px);
  }
  50% {
    transform: translateY(10px);
  }
  75% {
    transform: translateY(5px);
  }
  100% {
    transform: translateY(0px);
  }
`;

const Container = styled.div`
  width: 100%;
  margin-top: 125px;
  text-align: center;
  animation: ${jumping} 1.25s 0.5s linear infinite;
  @media (max-width: 1150px) {
    margin-top: 70px;
  }
`;

const Label = styled.p`
	color: #4A4A4A;
	font-family: NanumSquareOTF, sans-serif;
	font-size: 22px;
	font-weight: 800;
	line-height: 26px;
	text-align: center;
	margin-bottom: 28px;
`;

const ScrollDownMarker = styled.span`
  display: inline-block;
  position: relative;
  width: 36px;
  height: 36px;
  background: url(${ScrollIconFront});
  background-size: cover;
  &:after {
    content:'';
    position: absolute;
    top: 5px;
    left: 5px;
    width: 36px;
    height: 36px;
    background: url(${ScrollIconBack});
    background-size: cover;
    z-index: -1;
  }
`;


const ScrollDownMark = () => {
  return (
    <Fragment>
      <Container>
        <Label>“ Scroll Down ! ”</Label>
        <ScrollDownMarker/>
      </Container>
    </Fragment>
  );
};

export default ScrollDownMark;
