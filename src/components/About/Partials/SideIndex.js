import React, { Fragment } from 'react';
import styled from 'styled-components';
import CircleImage from '../../../assets/images/side_indicator/ic_indicator_s.svg';

const Container = styled.aside`
  float: left;
  width: 249px;
  height: 100vh;
  margin-right: ${props => props.marginRight && `${props.marginRight}px`}
`;

const NumberImage = styled.img`
  display: inline-block;
  margin-top: 154px;
  margin-left: 127px;
  margin-bottom: 62px;
  height: 81px;
  width: 122px;
`;

const VerticalBox = styled.div`
  position: relative;
  width: 122px;
  margin-left: auto;
  height: 100%;
  overflow: hidden;
`;

const Text = styled.span`
  position: absolute;
  display: inline-block;
	width: 40px;
	color: #FFFFFF;
	font-family: NanumSquareOTF, sans-serif;
	font-size: 43px;
	font-weight: 800;
	line-height: 60px;
	text-align: center;
	top: 30%;
	left: 50%;
	transform: translate(-50%, -50%);
	
	&:before, &:after {
	  content: '';
	  display: block;
	  position: absolute;
	  left: 50%;
	  width: 1px;
	  transform: translateX(-50%);
	  background-color: #FFF;
	}
	
	&:after {
	  bottom: 120%;
	  top: -9999px;
	}
	
	&:before {
	  top: 120%;
	  bottom: -9999px;
	}
	
	i.circle {
	  position: absolute;
	  left: 50%;
	  bottom: 115%;
	  width: 30px;
	  height: 30px;
	  background: url(${CircleImage}) no-repeat center;
	  background-size: contain;
	  
	  transform: translateX(-50%);
	}
`;

const VerticalLine = styled.span`
  
`;

// TODO: Create Side Index Component

const SideIndex = ({ indexImage, label, marginRight }) => {
  return (
    <Fragment>
      <Container marginRight={marginRight}>
        <NumberImage src={indexImage}/>
        <VerticalBox>
          <VerticalLine/>
          <Text><i className="circle"/>{label}</Text>
        </VerticalBox>
      </Container>
    </Fragment>
  );
};

export default SideIndex;
