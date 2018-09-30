import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import Designer from '../components/Designers/Designer';
import LineImage from '../assets/images/profile/dsnr_gradientline.svg';
import ButtonImage from '../assets/images/profile/btn_dsnr_golist.svg';
import TitleImage from '../assets/images/designers/title_designers.svg';
import { Title } from '../components/StyledPartials/TitleWithBgColor';
import data from '../models/data';
import { Link } from 'react-router-dom';

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

const GoListButton = styled(Link)`
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
    line-height: 51px;
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

const WorksBox = styled.div`
  margin-top: 37px;
  display: flex;
`;

const WorkImage = styled(Link)`
  position: relative;
  width: 221px;
  height: 221px;
  margin-left: 27px;
  border: 2px solid #4A4A4A;
  background: url(${props => props.image}) no-repeat center;
  background-size: cover;
  
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

  state = {
    profileData: data.filter(designer => designer.id === parseInt(this.props.match.params.id, 10)).shift()
  };


  render() {
    const { profileData } = this.state;
    return (
      <Fragment>
        <Container>
          <SideContent>
            <StyledTitle titleImage={TitleImage}/>
            <GoListButton to="/designers"><span>목록으로</span></GoListButton>
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
                photo={profileData.photo}/>
              <DesignerDetail>
                <NameBox>
                  <Name>{profileData.name}</Name>
                  <NameEn>{profileData.nameEn}</NameEn>
                </NameBox>
                <Email>{profileData.email}</Email>
                <Introduction>{profileData.text}</Introduction>
              </DesignerDetail>
            </DesignerBox>
            <Line/>
            <SubTitle>WORKS</SubTitle>
            <WorksBox>
              {
                Object.keys(profileData.works).map((key, index) => {
                  const workID = profileData.works[key][`${key}ID`];
                  return (
                    <WorkImage
                      key={index}
                      image={profileData.works[key].thumbnailImage}
                      to={`/work/${key}/${workID}`}>
                      <WorkCaption>{profileData.works[key].category.replace('_', ' ')}</WorkCaption>
                    </WorkImage>
                  );
                })
              }
            </WorksBox>
          </ContentBox>
        </Container>
      </Fragment>
    );
  }
}

export default DesignerProfile;
