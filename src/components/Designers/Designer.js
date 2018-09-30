import React, { Fragment } from 'react';
import styled, { css } from 'styled-components';


const Container = styled.li`
  display: inline-block;
  height: 100%;
  margin-right: 130px;
  margin-bottom: ${props => props.marginBottom || '101px'};
  text-align: center;
`;

const Circle = styled.div`
  position: relative;
  display: inline-block;
  border: 2px solid #4A4A4A;
  border-radius: 50%;
  width: 284px;
  height: 284px;
  
  ${props => props.photo && css`
    background: url(${props.photo}) no-repeat center;
    background-size: cover;
  `}
  
  ${props => (props.w && props.h) && css`
    width: ${props.w};
    height: ${props.h};  
  `}
  
  &:after {
    content: '';
    display: block;
    position: absolute;
    width: 284px;
    height: 284px;
    top: 12px;
    left: 12px;
    border-radius: 50%;
    border: 2px solid #4A4A4A;
    z-index: -1;
    
    ${props => (props.w && props.h) && css`
      width: ${props.w};
      height: ${props.h};  
    `}
    
    ${props => (props.top && props.left) && css`
      top: ${props.top};
      left: ${props.left};  
    `}
  }
`;

const Name = styled.span`
  display: inline-block;
	width: 100%;
	color: #4A4A4A;
	font-family: NanumSquareOTF, sans-serif;
	font-size: 30px;
	font-weight: 800;
	letter-spacing: 10px;
	line-height: 35px;
	margin-top: 56px;
`;

const NameEn = styled.span`
  display: block;
	width: 100%;
	color: #4A4A4A;
	font-family: NanumSquareOTF, sans-serif;
	font-size: 30px;
	font-weight: 300;
	line-height: 35px;
`;

const Designer = ({ width, height, top, left, marginBottom, photo, name, nameEn }) => {
  return (
    <Fragment>
      <Container marginBottom={marginBottom}>
        <Circle w={width} h={height} top={top} left={left} photo={photo}/>
        {name && <Name>{name}</Name>}
        {nameEn && <NameEn>{nameEn}</NameEn>}
      </Container>
    </Fragment>
  );
};

export default Designer;
