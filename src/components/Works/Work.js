import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const WorkItem = styled(Link)`
  position: relative;
  display: inline-block;
  margin-right: 42px;
  margin-bottom: 102px;
  width: 322px;
  height: 322px;
  border: 2px solid #4A4A4A;
  transition: all 350ms ease-in-out;
  background: url(${props => props.workImage}) no-repeat center;
  background-size: cover;
  text-decoration: none;
  
  &:hover {
    box-shadow: 20px 20px 0 #696969;
    div {
      display: block;
    }
  }
  
  div {
    display: none;
  }
`;

const ContentBox = styled.div`
  padding-top: 63px;
  padding-bottom: 27px;
  height: 100%;
  text-align: center;
  font-family: NanumSquareOTF, sans-serif;
  color: #FFFFFF;
  background: rgba(163,124,216, 0.85);
`;

const Title = styled.span` 
  display: block;
	width: 70%;
	font-size: 25px;
	font-weight: 800;
	line-height: 37px;
	padding-bottom: 17px;
	border-bottom: 2px solid #FFF;
	margin: 0 auto 17px;
	word-break: keep-all;
`;

const Name = styled.span`
  display: inline-block;
	width: 100%;
	font-size: 25px;
	font-weight: bold;
	line-height: 36px;
	text-align: center;
	margin-bottom: 40px;
`;

const Dot = styled.i`
  display: block;
  position: absolute;
  top: 80%;
  left: 49%;
  width: 10px;
  height: 10px;
  border-radius: 100%;
  background: #FFF;
  margin: 0 auto 5px;
`;

const Category = styled.span`
  position: absolute;
  display: block;
  top: 85%;
  width: 100%;
	font-size: 15px;
	line-height: 36px;
	text-align: center;
`;

class Work extends Component {
  render() {
    return (
      <Fragment>
        <WorkItem to={`/work/${this.props.realCategory}/${this.props.workID}`} workImage={this.props.workImage}>
          <ContentBox>
            <Title>{this.props.title}</Title>
            <Name>{this.props.name}</Name>
            <Dot/>
            <Category>{this.props.category}</Category>
          </ContentBox>
        </WorkItem>
      </Fragment>
    );
  }
}

export default Work;
