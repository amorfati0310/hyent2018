import React, { Fragment, PureComponent } from 'react';
import MainLogoImage from '../../assets/images/main_logo.svg';
import Professor1 from '../../assets/images/professors/prof_1_go.png';
import Professor2 from '../../assets/images/professors/prof_2_kims.png';
import Professor3 from '../../assets/images/professors/prof_3_kimh.png';
import Professor4 from '../../assets/images/professors/prof_4_no.png';
import styled, { css } from 'styled-components';
import { DefaultSection, FlexContainer } from './Partials';
import SideIndex from './Partials/SideIndex';
import Number04Image from '../../assets/images/side_indicator/num04.png';

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

const ProfessorPhoto = styled.a`
  width: 236px;
  height: 227px;
  background: url(${props => props.photo}) no-repeat center;
  background-size: cover;
  opacity: 0.5;
  transition: opacity 250ms ease-in-out;
  
  ${props => props.active && css`
    opacity: 1;
  `}
  
  &:hover {
    opacity: 0.8;
  }
  
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


class Congratulations extends PureComponent {

  state = {
    visible: 0
  };

  handleClick = visible => {
    this.setState({ visible });
  };

  render() {
    const professorData = [
      {
        name: '고은영',
        position: '교수님',
        photo: Professor1,
        word: `2018 엔터테인먼트 디자인학과 4학년 여러분 모두 수고했어요. 여러분이 만들어 낸 가치있는 작품들은 앞으로 사회로 향하는 든든한 층층다리가 되어줄거에요. 멋진 미래를 기원합니다.`
      },
      {
        name: '김성훈',
        position: '교수님',
        photo: Professor2,
        word: `졸업전시회를 축하하며....4년의 시간이 지나갑니다. 찰나의 순간인 듯 했는데... 많은 것을 배우려했던 대학생활은 가장 뜻 깊은 인생의 여정이었기를 바랍니다. 전시회를 준비하면서 혼란스럽고 고생스럽다고도 생각했겠지만 아름답고 행복한 추억이었을 것입니다. 이제 그동안의 여정을 마무리하며 좀 더 즐거운 세상으로 변화 시키는 진정한 디자이너가 되기를 바랍니다.`
      },
      {
        name: '김헌',
        position: '교수님',
        photo: Professor3,
        word: `졸업전시회의 준비를 위해 열정과 노력을 쏟았던 모든 학생들에게 다시 한번 축하의 박수를 보냅니다. 어려운 여건 속에서 노력을 기울이던 여러분의 모습들은 후배들에게 용기와 좋은 길잡이가 되며 엔터테인먼트 디자인학과의 전통으로 이어질 것 입니다. 이제 여러분이 도전하고자 하는 미래는 더 큰 용기와 땀을 요구할 것입니다. 하지만 지금까지 준비했던 꿈과 열정이 미래의 큰 힘이 될 것이라 확신하며 졸업전시회 구성원들과 함께 했던 시간과 과정이 참여 학생에게 새로운 출발점이 되길 바랍니다.`
      },
      {
        name: '노승관',
        position: '교수님',
        photo: Professor4,
        word: `빈 화면에서 시작해서 작품으로 완성하기까지 노력, 고민, 후회, 성취감, 아쉬움, 기쁨, 긴 시간 공 들인 만큼 좋은 작품. 진심으로 축하합니다.`
      }
    ];

    const isActive = index => this.state.visible === index;


    return (
      <Fragment>
        <CongratulationsSection className="section congratulations">
          <SideIndex marginRight={144} indexImage={Number04Image} label="교수님말씀"/>
          <Container>
            <ProfessorPhotoContainer>
              {
                professorData.map((data, index) => (
                  <ProfessorPhoto
                    onClick={this.handleClick.bind(null, index)}
                    photo={data.photo}
                    active={isActive(index)}/>
                ))
              }
            </ProfessorPhotoContainer>
            <ProfessorDescriptionContainer>
              {
                professorData
                  .filter((data, index) => isActive(index))
                  .map((data, index) => (
                    <Fragment>
                      <ProfessorNameBox key={index}>
                        <ProfessorName>{data.name}</ProfessorName>
                        <ProfessorLabel>{data.position}</ProfessorLabel>
                        <Logo src={MainLogoImage} alt="main-logo"/>
                      </ProfessorNameBox>
                      <ProfessorCongratulations>{data.word}</ProfessorCongratulations>
                    </Fragment>
                  ))
              }
            </ProfessorDescriptionContainer>
          </Container>
        </CongratulationsSection>
      </Fragment>
    );
  }
}

export default Congratulations;
