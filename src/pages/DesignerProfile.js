import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import { Title } from '../components/Designers/Title';
import Designer from '../components/Designers/Designer';
import LineImage from '../assets/images/profile/dsnr_gradientline.svg';
import ButtonImage from '../assets/images/profile/btn_dsnr_golist.svg';

const Container = styled.article`
  margin-top: 120px;
  padding-top: 71px;
`;

const SideContent = styled.aside`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  float: left;
  width: 480px;
  height: 960px;
  padding-left: 91px;
  padding-bottom: 203px;
`;

const StyledTitle = styled(Title)`
  margin-right: 228px;
`;

const GoListButton = styled.button`
  display: inline-block;
  width: 52px;
  height: 51px;
  background: url(${ButtonImage}) no-repeat center;
  background-size: cover;
  border: none;
  
  span {
    display: inline-block;
    width: 73px;
    margin-left: 74px;
    color: #4A4A4A;
    font-family: NanumSquareOTF, sans-serif;
    font-size: 20px;
    line-height: 23px;
  }
`;

const ContentBox = styled.section`
  display: inline-block;
  width: 1440px;
`;

const SubTitle = styled.h2`
	height: 34px;
	width: 220px;
	color: #4A4A4A;
	font-family: Futura, sans-serif;
	font-size: 26px;
	font-weight: bold;
	line-height: 35px;
`;

const DesignerBox = styled.div`
  display: flex;
  align-items: center;
  margin-left: 124px;
  margin-top: 77px;
  margin-bottom: 31px;
`;

const DesignerDetail = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  align-items: center;
`;

const NameBox = styled.div`
  width: 226px;
  height: 72px;
  border-right: 1px solid #9B9B9B;
  margin-right: 55px;
`;

const Name = styled.p`
	color: #80C9F6;
	font-family: NanumSquareOTF, sans-serif;
	font-size: 33px;
	font-weight: 800;
	letter-spacing: 10px;
	line-height: 37px;
`;

const NameEn = styled.p`
	color: #97E055;
	font-family: Futura, sans-serif;
	font-size: 25px;
	font-weight: 500;
	line-height: 33px;
`;

const Email = styled.p`
	color: #696969;
	font-family: NanumSquareOTF, sans-serif;
	font-size: 22px;
	font-weight: bold;
	line-height: 26px;
`;

const Introduction = styled.p`
  margin-top: 40px;
	width: 526px;
	color: #4A4A4A;
	font-family: NanumSquareOTF, sans-serif;
	font-size: 16px;
	line-height: 30px;
`;

const Line = styled.hr`
  width: 1110px;
  height: 2px;
  display: inline-block;
  background: url(${LineImage}) no-repeat center;
  background-size:cover;
  margin-top: 31px;
  margin-bottom: 55px;
`;

const WorksBox = styled.a`
  margin-top: 37px;
  display: flex;
`;

const WorkImage = styled.div`
  position: relative;
  margin-left: 27px;
  width: 221px;
  height: 221px;
  border: 2px solid #4A4A4A;
  
  &:nth-of-type(2) {
    margin: 0 157px;
  }
`;

const WorkCaption = styled.span`
  position: absolute;
  bottom: 0;
  left: 236px;
  width: 69px;
	color: #696969;
	font-family: Futura, sans-serif;
	font-size: 18px;
	font-weight: 500;
	line-height: 25px;
`;

class DesignerProfile extends Component {
  render() {
    return (
      <Fragment>
        <Container>
          <SideContent>
            <StyledTitle/>
            <GoListButton><span>목록으로</span></GoListButton>
          </SideContent>
          <ContentBox>
            <SubTitle>INTRODUCTION</SubTitle>
            <DesignerBox>
              <Designer
                width="214px"
                height="214px"
                top="8px"
                left="8px"
                marginBottom="0px"
                photo="https://placehold.it/214x214"/>
              <DesignerDetail>
                <NameBox>
                  <Name>김나연</Name>
                  <NameEn>Nayeon Kim</NameEn>
                </NameBox>
                <Email>nykim@gmail.com</Email>
                <Introduction>“ 나와 거리가 멀다 생각한 졸업 전시회가 오픈되었네요. 작품을 만들며 어느 때 보다  많이 배웠습니다! 앞으로 전시회를할 후배동기들도 어느분야를하던 화이팅^♡^! 나의 창작물을 완성하여 사람들에게 보여주는 자리는 큰 의미라 생각됩니다 다들 수고했어요! 짝!짝!짝! “ (한마디)</Introduction>
              </DesignerDetail>
            </DesignerBox>
            <Line/>
            <SubTitle>WORKS</SubTitle>
            <WorksBox>
              <WorkImage><WorkCaption>DIGITAL MEDIA</WorkCaption></WorkImage>
              <WorkImage><WorkCaption>INTERACTIVE DESIGN</WorkCaption></WorkImage>
              <WorkImage><WorkCaption>MOTION GRAPHICS</WorkCaption></WorkImage>
            </WorksBox>
          </ContentBox>
        </Container>
      </Fragment>
    );
  }
}

export default DesignerProfile;
