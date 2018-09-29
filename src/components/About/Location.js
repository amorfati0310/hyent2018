import React, { Fragment, PureComponent } from 'react';
import styled from 'styled-components';
import TitleImage from '../../assets/images/location/title.svg';
import LocationInfoImage from '../../assets/images/location/location_info.svg';
import { DefaultSection } from './Partials';

const LocationSection = styled(DefaultSection)`
  background: #80C9F6;
`;

const Title = styled.img`
  display: block;
  width: auto;
  margin: 114px auto 85px auto;

`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;
`;


const MapBox = styled.div`
	height: 592px;
	width: 592px;
	border: 2px solid #4A4A4A;
	background-color: #FFFFFF;
	margin-right: 78px;
`;

const SubTitle = styled.h3`
	height: 30px;
	width: 153px;
	margin-bottom: 15px;
	font-family: NanumSquareOTF, sans-serif;
	font-size: 27px;
	font-weight: 800;
	color: #696969;
	line-height: 31px;
`;

const InfoText = styled.p`
	width: 506px;
	margin-bottom: 43px;
	color: #FFFFFF;
	font-family: NanumSquareOTF, sans-serif;
	font-size: 40px;
	font-weight: 800;
	line-height: 58px;
`;

class Location extends PureComponent {
  render() {
    return (
      <Fragment>
        <LocationSection className="section location">
          <Title src={TitleImage} alt="title"/>
          <Container>
            <MapBox/>
            <div>
              <SubTitle>전시 장소</SubTitle>
              <InfoText>서울시 종로구 인사동 11길 6 토포하우스</InfoText>
              <SubTitle>전시 기간</SubTitle>
              <InfoText>2018 10 10 - 10 15</InfoText>
              <img src={LocationInfoImage} alt="location"/>
            </div>
          </Container>
        </LocationSection>
      </Fragment>
    );
  }
}

export default Location;
