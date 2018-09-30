import React, { Fragment } from 'react';
import styled from 'styled-components';


const Container = styled.li`
  display: inline-block;
  flex-basis: 30%;
  height: 100%;
  margin-right: ${props => props.marginRight || '130px'};
  margin-bottom: ${props => props.marginBottom || '101px'};
  text-align: center;
`;

const Photo = styled.img`
  width: 284px;
  height: 284px;
  object-fit: cover;
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
	margin-bottom: 10px;
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

const Designer = ({ marginBottom, marginRight, photo, name, nameEn }) => {
  return (
    <Fragment>
      <Container marginBottom={marginBottom} marginRight={marginRight}>
        <Photo src={photo} alt={name}/>
        {name && <Name>{name}</Name>}
        {nameEn && <NameEn>{nameEn}</NameEn>}
      </Container>
    </Fragment>
  );
};

export default Designer;
