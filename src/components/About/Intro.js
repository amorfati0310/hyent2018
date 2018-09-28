import React, { Fragment, PureComponent } from 'react';
import LogoImage from '../../assets/images/intro/enter_logo.svg';
import LineImage from '../../assets/images/intro/sep_line.svg';
import TitleImage from '../../assets/images/intro/title.svg';
import styled from 'styled-components';
import { DefaultSection } from './Partials';

const IntroSection = styled(DefaultSection)`
  background-color: #A37CD8;
`;

const Logo = styled.img`
  object-fit: cover;
`;

const Line = styled.img`
  object-fit: cover;
`;

const Title = styled.img`
  object-fit: cover;
`;

const IntroText = `한양대학교 ERICA 디자인대학 소속의 엔터테인먼트 디자인학과는 새롭게
등장하는 스마트 미디어 매체와 다양한 인터랙티브미디어에 의한 컨텐츠
산업의 경쟁력 우위를 확보하고 문화 산업을 주도하는 엔터테인먼트 디자인
크리에이터의 양성이라는 대명제 아래, 영상디자인, 스마트 미디어 디자인,
디지털컨텐츠, 경영, 공학 등의 다양한 분야 를 융합한 창의적 인재 양성을 위한
교육과정을 제공한다.`;

const Phrase = styled.p`
  font-family: NanumSquare, sans-serif;
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
          <Logo src={LogoImage} alt="logo"/>
          <Line src={LineImage} alt="line"/>
          <Title src={TitleImage} alt="intro-title"/>
          <Phrase>{IntroText}</Phrase>
        </IntroSection>
      </Fragment>
    );
  }
}


export default Intro;
