import React, { Fragment, PureComponent } from 'react';
import styled from 'styled-components';
import TitleImage from '../assets/images/tumblbug/tumblbug_title2.svg';
import LineImage from '../assets/images/tumblbug/tumblbug_title_line.svg';
import Set1Image from '../assets/images/tumblbug/tumblbug_set1.svg';
import Set2Image from '../assets/images/tumblbug/tumblbug_set2.svg';
import Set3Image from '../assets/images/tumblbug/tumblbug_set3.svg';
import Set4Image from '../assets/images/tumblbug/tumblbug_set4.svg';
import Set5Image from '../assets/images/tumblbug/tumblbug_set5.svg';

const Container = styled.article`
  padding-top: 120px;
  text-align: center;
`;

const Title = styled.h1`
  display: block;
  width: 100%;
  height: 40px;
  margin-top: 25px;
  background: url(${TitleImage}) no-repeat center;
  background-size: contain;
`;

const Line = styled.hr`
  display: inline-block;
  width: 944px;
  height: 2px;
  margin-top: 24px;
  margin-bottom: 21px;
  border: none;
  background: url(${LineImage}) no-repeat center;
  background-size: cover;
`;

const Description = styled.p`
	height: 54px;
	width: 764px;
	margin: 0 auto;
	color: #4A4A4A;
	font-family: NanumSquareOTF, sans-serif;
	font-size: 15px;
	line-height: 27px;
`;

const SetFlexBox = styled.div`
  display: flex;
  width: 75%;
  margin: 53px auto 0 auto;
  justify-content: space-between;
`;

const SetImage = styled.div`
  width: 253px;
  height: 560px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
`;

const Set1 = styled(SetImage)`
  background-image: url(${Set1Image});
`;

const Set2 = styled(SetImage)`
  background-image: url(${Set2Image});
`;

const Set3 = styled(SetImage)`
  background-image: url(${Set3Image});
`;

const Set4 = styled(SetImage)`
  background-image: url(${Set4Image});
`;

const Set5 = styled(SetImage)`
  background-image: url(${Set5Image});
`;


const GoToDonationButton = styled.a`
  display: block;
  margin: 66px auto 0;
  position: relative;
  border: 2px solid #4A4A4A;
  background-color: #FFF;
  cursor: pointer;
  text-decoration: none;
  text-align: center;
  width: 234px;
  height: 59px;
	color: #4A4A4A;
	font-size: 21px;
	font-weight: 800;
	line-height: 59px;
	transition: all 1s linear;
  
  &:hover:after {
    top: 14px;
    left: 15px;
  }  
  
  &:after {
    content: '';
    position: absolute;
    display: inline-block;
    width: 234px;
    height: 59px;
    top: 9px;
    left: 11px;
    border: 2px solid #4A4A4A;
    z-index: -1;
    background: linear-gradient(225.07deg, #97E055 0%, #80C9F6 50.68%, #A37CD8 100%);
  }
`;

const DescriptionText = `
이번 졸업전시회를 위한 텀블벅 펀딩을 진행중입니다. 후원금 전액은 도록 제작을 비롯한 졸업 전시 준비 비용으로 사용됩니다. 
후원을 해주신 분들께는 감사의 마음을 담은 선물을 전달할 예정입니다. 많은 성원과 관심 부탁드립니다. 
`;

class Tumblbug extends PureComponent {
  render() {
    return (
      <Fragment>
        <Container>
          <Title/>
          <Line/>
          <Description>
            {DescriptionText}
          </Description>
          <SetFlexBox>
            <Set1/>
            <Set2/>
            <Set3/>
            <Set4/>
            <Set5/>
          </SetFlexBox>
        </Container>
        <GoToDonationButton href="https://tumblbug.com/hy_ent2018" target="_blank">
          후원하러가기
        </GoToDonationButton>
      </Fragment>
    );
  }
}

export default Tumblbug;
