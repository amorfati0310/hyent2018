import React, { Fragment, PureComponent } from 'react';
import TitleImage from '../../assets/images/concept/title.svg';
import SubTitleImage from '../../assets/images/concept/subtitle.svg';
import BrandingImage from '../../assets/images/concept/branding.svg';
import styled from 'styled-components';
import { DefaultSection, FlexContainer } from './Partials';

const FlexContainerWithoutPaddingTop = styled(FlexContainer)`
  padding-top: 0;
`;

const ConceptSection = styled(DefaultSection)`
  background-color: #80C9F6;
`;

const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;


const Title = styled.img`
`;

const Line = styled.hr`
  display: inline-block;
  width: 370px;
  border: 1px dotted #FFF;
  margin-top: 44px;
  margin-bottom: 46px;
`;

const Subtitle = styled.img`

`;

const Branding = styled.img`
  display: inline-block;
  margin-top: 74px;
  margin-bottom: 56px;
`;

const BrandingDescription = styled.p`
	height: 180px;
	width: 755px;
	color: #FFFFFF;
	font-family: NanumSquareOTF, sans-serif;
	font-weight: 300;
	font-size: 22px;
	line-height: 42px;
	word-break: keep-all;
`;

const BrandingDescriptionText = `
‘고리전’은 엔터테인먼트 디자인과의 졸업전시회를 말합니다. 제 16회 졸업전시회인
2018 고리전의 아이덴티티는 계단을 뜻하는 단어, ‘층층다리’ 입니다. ‘층층다리'에는
우리 모두 졸업 전시를 통해 4년간의 배움을 마치며 사회라는 층으로 도약하기 위한
마지막 계단에 서있다는 의미를 담았습니다. 
`;

class Concept extends PureComponent {
  render() {
    return (
      <Fragment>
        <ConceptSection className="section concept">
          <FlexContainerWithoutPaddingTop>
            <ContentBox>
              <Title src={TitleImage} alt="title"/>
              <Line/>
              <Subtitle src={SubTitleImage} alt="title"/>
              <Branding src={BrandingImage} alt="title"/>
              <BrandingDescription>{BrandingDescriptionText}</BrandingDescription>
            </ContentBox>
          </FlexContainerWithoutPaddingTop>
        </ConceptSection>
      </Fragment>
    );
  }
}

export default Concept;
