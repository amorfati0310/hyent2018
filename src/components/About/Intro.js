import React, { Fragment, PureComponent } from 'react';
import LogoImage from '../../assets/images/intro/enter_logo.svg';
import LineImage from '../../assets/images/intro/sep_line.svg';
import TitleImage from '../../assets/images/intro/title.svg';
import CharWithDotsImage from '../../assets/images/intro/num01_hanyanguniv.svg';
import styled from 'styled-components';
import { DefaultSection, FlexContainer } from './Partials';
import SideIndex from './Partials/SideIndex';
import Number01Image from '../../assets/images/side_indicator/number01.svg';

const IntroSection = styled(DefaultSection)`
  background-color: #A37CD8;
`;

const Container = styled(FlexContainer)`
  padding-top: 149px;
`;

const LogoBox = styled.div`
  margin-top: 40px;
  width: 455px;
  height: 556px;
  background: url(${LogoImage}) no-repeat center;
  background-size: contain;
  margin-right: 97px;
`;

const ContentBox = styled.div`
  margin-top: 40px;
  display: flex;
  height: 556px;
  flex-direction: column;
  text-align: left;
`;

const Line = styled.img`
  display: inline-block;
  width: 102px;
	height: 16px;
  object-fit: cover;
  margin-top: 31px;
  margin-bottom: 56px;
`;

const CharWithDots = styled.div`
  width: 332px;
  height: 37px;
  margin-bottom: 16px;
  background: url(${CharWithDotsImage}) no-repeat left;
	background-size: contain;
`;

const Title = styled.div`
	width: 544px;
	height: 155px;
	background: url(${TitleImage}) no-repeat center;
	background-size: contain;
`;

const IntroText = `한양대학교 ERICA 디자인대학 소속의 엔터테인먼트 디자인학과는 새롭게
등장하는 스마트 미디어 매체와 다양한 인터랙티브미디어에 의한 컨텐츠
산업의 경쟁력 우위를 확보하고 문화 산업을 주도하는 엔터테인먼트 디자인
크리에이터의 양성이라는 대명제 아래, 영상디자인, 스마트 미디어 디자인,
디지털컨텐츠, 경영, 공학 등의 다양한 분야 를 융합한 창의적 인재 양성을 위한
교육과정을 제공한다.`;

const Phrase = styled.p`
  font-family: NanumSquareOTF, sans-serif;
  font-weight: 400;
  width: 664px;
  height: 272px;
  color: #FFF;
  font-size: 21px;
  line-height: 45px;
  word-break: keep-all;
`;

class Intro extends PureComponent {
  render() {
    return (
      <Fragment>
        <IntroSection className="section intro">
          <SideIndex label="학과소개" indexImage={Number01Image} marginRight="140"/>
          <Container>
            <LogoBox/>
            <ContentBox>
              <CharWithDots/>
              <Title/>
              <Line src={LineImage} alt="line"/>
              <Phrase>{IntroText}</Phrase>
            </ContentBox>
          </Container>
        </IntroSection>
      </Fragment>
    );
  }
}


export default Intro;
