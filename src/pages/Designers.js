import React, { Component, Fragment } from 'react';
import styled, { css } from 'styled-components';
import { Designer } from '../components/Designers';
import AllActive from '../assets/images/designers/btn_works_all_s.svg';
import { Title } from '../components/Designers/Title';

const Container = styled.article`
  padding-top: 120px;
`;

const Description = styled.p`
  margin-top: 34px;
  margin-bottom: 135px;
	width: 190px;
	color: #4A4A4A;
	font-family: NanumSquareOTF, sans-serif;
	font-size: 15px;
	letter-spacing: 0.19px;
	line-height: 26px;
`;

const VisibilityFilter = styled.button`
  display: block;
  width: 80px;
  height: 19px;
  margin-bottom: 62px;
  border: none;
  background: url(${AllActive}) no-repeat right;
  background-size: contain;
  ${props => props.active && css`
    background: url(${props.visibilityFilter}) no-repeat center;
    background-size: contain;
  `}
`;

const SideContent = styled.aside`
  position: fixed;
  top: 120px;
  left: 0;
  padding-top: 72px;
  padding-left: 91px;
  height: 100vh;
  z-index: 1;
`;

const DesignersList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-top: 188px;
  margin-left: 481px;
`;


class Designers extends Component {
  render() {
    return (
      <Fragment>
        <Container>
          <SideContent>
            <Title/>
            <Description>2018 졸업전시회 ‘층층다리’의 디자이너들을 소개합니다!</Description>
            <VisibilityFilter/>
            <VisibilityFilter/>
            <VisibilityFilter/>
            <VisibilityFilter/>
            <VisibilityFilter/>
            <VisibilityFilter/>
          </SideContent>
          <DesignersList>
            <Designer name="김나연" nameEn="Nayeon Kim" photo="https://placehold.it/284x284"/>
            <Designer name="김나연" nameEn="Nayeon Kim" photo="https://placehold.it/284x284"/>
            <Designer name="김나연" nameEn="Nayeon Kim" photo="https://placehold.it/284x284"/>
            <Designer name="김나연" nameEn="Nayeon Kim" photo="https://placehold.it/284x284"/>
            <Designer name="김나연" nameEn="Nayeon Kim" photo="https://placehold.it/284x284"/>
            <Designer name="김나연" nameEn="Nayeon Kim" photo="https://placehold.it/284x284"/>
            <Designer name="김나연" nameEn="Nayeon Kim" photo="https://placehold.it/284x284"/>
            <Designer name="김나연" nameEn="Nayeon Kim" photo="https://placehold.it/284x284"/>
            <Designer name="김나연" nameEn="Nayeon Kim" photo="https://placehold.it/284x284"/>
            <Designer name="김나연" nameEn="Nayeon Kim" photo="https://placehold.it/284x284"/>
            <Designer name="김나연" nameEn="Nayeon Kim" photo="https://placehold.it/284x284"/>
            <Designer name="김나연" nameEn="Nayeon Kim" photo="https://placehold.it/284x284"/>
          </DesignersList>
        </Container>
      </Fragment>
    );
  }
}

export default Designers;
