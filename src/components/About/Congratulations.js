import React, { Fragment, PureComponent } from 'react';
import MainLogoImage from '../../assets/images/main_logo.svg';
import SampleImage from '../../assets/images/sample.png';
import styled from 'styled-components';
import { DefaultSection, FlexContainer } from './Partials';

const CongratulationsSection = styled(DefaultSection)`
  background-color: #97E055;
  //background: linear-gradient(#97E055 49%, transparent 49%),
	//	linear-gradient(-45deg, white 33%, transparent 33%) 0 50%,
	//	white linear-gradient(45deg, white 33%, #97E055 33%) 0 50%;
  //background-repeat: repeat-x;
	//background-size: 1px 100%, 80px 80px, 80px 80px;
`;

const Container = styled(FlexContainer)`
  position: relative;
  padding-top: 0;
  align-items: center;
  &:after {
    content: '';
    display: block;
    position: absolute;
  }
`;

const ProfessorPhotoContainer = styled.div`
  display: flex;
  width: 519px;
  align-items: center;
  flex-wrap: wrap;
  margin-right: 91px;
`;

const ProfessorPhoto = styled.img`
  width: 236px;
  height: 236px;
  object-fit: cover;
  border: 3px solid #4A4A4A;
  
  &:nth-of-type(1) {
    margin-bottom: 15px;
  }
  
  &:nth-of-type(2) {
    margin-bottom: 15px;
  }
  
  &:nth-of-type(odd) {
    margin-right: 15px;
  }
`;

const ProfessorDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ProfessorNameBox = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  width: 558px;
	font-family: NanumSquareOTF, sans-serif;
	color: #FFFFFF;
  letter-spacing: 1.4px;
	line-height: 31px;
  margin-bottom: 68px; // 44 + 24
	
	&:after {
	  content: '';
	  display: block;
	  position: absolute;
	  bottom: -24px;
	  left: 0;
	  width: 100%;
	  height: 3px;
	  background-color: #FFF;
	}
`;

const ProfessorName = styled.span`
  display: inline-block;
	font-size: 41px;
	font-weight: 800;
`;

const ProfessorLabel = styled.span`
  display: inline-block;
  font-size: 27px;
  font-weight: 800;
`;

const Logo = styled.img`
  width: 41px;
  height: 41px;
  object-fit: cover;
  margin-left: 180px;
`;

const ProfessorCongratulations = styled.p`
	width: 599px;
	color: #4A4A4A;
	font-family: NanumSquareOTF, sans-serif;
	font-size: 23px;
	line-height: 48px;
  word-break: keep-all;
`;

const ProfessorSpeech = `
여러분들의 졸업전시를 축하합니다. 여러분들의  졸업전시를 축하합니다. 여러분들의 졸업전시를 축하합니다. 여러분들의 졸업전시를 축하합니다. 여러분들의  졸업전시를 축하합니다. 여러분들의 졸업전시를 축하합니다 여러분들의 졸업전시를 축하합니다. 여러분들의  졸업전시를 축하합니다. 여러분들의 졸업전시를 축하합니다
`;


class Congratulations extends PureComponent {
  render() {
    return (
      <Fragment>
        <CongratulationsSection className="section congratulations">
          <Container>
            <ProfessorPhotoContainer>
              <ProfessorPhoto src={SampleImage} alt="photo"/>
              <ProfessorPhoto src={SampleImage} alt="photo"/>
              <ProfessorPhoto src={SampleImage} alt="photo"/>
              <ProfessorPhoto src={SampleImage} alt="photo"/>
            </ProfessorPhotoContainer>
            <ProfessorDescriptionContainer>
              <ProfessorNameBox>
                <ProfessorName>디 디</ProfessorName>
                <ProfessorLabel>고양이</ProfessorLabel>
                <Logo src={MainLogoImage} alt="main-logo"/>
              </ProfessorNameBox>
              <ProfessorCongratulations>{ProfessorSpeech}</ProfessorCongratulations>
            </ProfessorDescriptionContainer>
          </Container>
        </CongratulationsSection>
      </Fragment>
    );
  }
}

export default Congratulations;
