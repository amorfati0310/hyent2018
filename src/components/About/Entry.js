import styled from 'styled-components';
import Background from '../../assets/images/about/main_background@3x.png';
import TitleImage from '../../assets/images/about/main_title.svg';
import GradientLineImage from '../../assets/images/about/main_line_gr.svg';
import SubTitleImage from '../../assets/images/about/main_title_02.svg';

import React, { Fragment, PureComponent } from 'react';
import ScrollDownMark from './Partials/EntryPartials/ScrollDownIcon';
import { DefaultSection, FlexContainer } from './Partials';

const EntrySection = styled(DefaultSection)`
  background: url(${Background}) no-repeat center;
  background-size: cover;
  z-index: 0;
`;


const MotionLogoBox = styled.div`
  position: relative;
  width: 530px;
  height: 530px;
  margin-right: 166px;
  border: 2px solid #4A4A4A;
  background-color: #FFF;
  &:before {
    content: '';
    display: block;
    position: absolute;
    width: 530px;
    height: 530px;
    top: 30px;
    left: 30px;
    background-color: #696969;
    border: 2px solid #4A4A4A;
    z-index: -1; // TODO: Remove z-index
  }
`;

const ContentBox = styled.div`
  height: 530px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
`;

const Title = styled.img`
  
`;

const GradientLine = styled.img`
  display: inline-block;
  margin-top: 51px;
  margin-bottom: 66px;
`;

const SubTitle = styled.img`

`;

class Entry extends PureComponent {
  render() {
    return (
      <Fragment>
        <EntrySection className="section entry">
          <FlexContainer>
            <MotionLogoBox/>
            <ContentBox>
              <Title src={TitleImage} alt="title"/>
              <GradientLine src={GradientLineImage} alt="line"/>
              <SubTitle src={SubTitleImage} alt="subtitle"/>
            </ContentBox>
          </FlexContainer>
          <ScrollDownMark/>
        </EntrySection>
      </Fragment>
    );
  }
}

export default Entry;
