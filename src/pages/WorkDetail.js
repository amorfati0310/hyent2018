import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import CloseButtonImage from '../assets/images/btn_worksdetail_x.svg';
import YouTube from 'react-youtube';
import data from '../models/data';

const Container = styled.article`
  margin-top: 120px;
`;

const WorkContainer = styled.section`
`;

const WorkVideoContainer = styled(YouTube)`
  max-width: 1350px;
  max-height: 980px;
`;

const WorkImageContainer = styled.div`
  float:left;
  max-width: 1350px;
  max-height: 980px;
  height: 100%;
  overflow: hidden;
  overflow-y: scroll;
  background-size: cover;
  &::-webkit-scrollbar { 
    display: none; 
  }  
`;

const WorkImage = styled.img`
  width: 100%;
  height: 100%;
`;

const SideContainer = styled.aside`
  position: relative;
  float: left;
  width: 570px;
  height: 960px;
  padding-left: 70px;
  
  &:after {
    content: '';
    display: block;
    clear: both;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 23px;
  right: 48px;
  display: block;
  height: 51px;
  width: 50px;
  background: url(${CloseButtonImage}) no-repeat center;
  background-size: cover;
  border: none;
  cursor: pointer;
  
  &:focus {
    outline: none;
  }
`;

const TitleBox = styled.div`
  width: 100%;
  margin-top: 74px;
`;

const Title = styled.h1`
	color: #80C9F6;
	font-family: "Apple SD Gothic Neo", sans-serif;
	font-size: 52px;
	font-weight: 800;
	line-height: 63px;
`;

const Category = styled.h2`
	color: #97E055;
	font-family: "Apple SD Gothic Neo", sans-serif;
	font-size: 24px;
	font-weight: 800;
	line-height: 29px;
	margin-bottom: 13px;
`;

const Members = styled.ul`
  display: block;
  margin-top: 79px;
  margin-bottom: 109px;
`;

const Member = styled.li`
  display: block;
  margin-bottom: 15px;
`;

const Name = styled.span`
  color: #4A4A4A;
  font-family: "Apple SD Gothic Neo", sans-serif;
  font-size: 23px;
  font-weight: bold;
  margin-right: 30px;
`;

const Email = styled.span`
	color: #4A4A4A;
	font-family: "Apple SD Gothic Neo", sans-serif;
	font-size: 23px;
`;

const Line = styled.hr`
  display: inline-block;
  width: 432px;
  border: 1px solid #979797;
`;

const ExplanationBox = styled.div`
  width: 100%;
	height: 22px;
	color: #9B9B9B;
	font-family: "Apple SD Gothic Neo", sans-serif;
	font-size: 23px;
	text-align: justify;
  
  span.title {
    font-weight: bold;
    display: inline-block;
    padding-top: 39px;
    padding-bottom: 29px;
  }
  
  p {
    width: 432px;
    font-size: 20px;
	  line-height: 35px;
	  font-weight: 400;
    max-height: 395px;
    overflow: hidden;
    overflow-y: scroll;
    &::-webkit-scrollbar { 
      display: none; 
    }
  }
  
`;


class WorkDetail extends Component {

  mapToMember = work => {
    const members = work.works[this.state.category].members;
    if (members) {
      return (
        members.map(member => (
          <Member>
            <Name>{member.name}</Name>
            <Email>{member.email}</Email>
          </Member>
        ))
      );
    } else {
      return (
        <Member>
          <Name>{work.name}</Name>
          <Email>{work.email}</Email>
        </Member>
      );
    }
  };

  goBack = () => {
    this.props.sideVisible && this.props.handleSideMenu();
    this.props.history.goBack();
  };

  constructor(props) {
    super(props);
    this.props.sideVisible && this.props.handleSideMenu();
    const category = this.props.location.pathname.split('/')[2];
    const workID = parseInt(this.props.match.params.id, 10);
    this.state = {
      category,
      workID,
      data: this.getWorkData(category, workID)
    };
  }

  getWorkData(category, workID) {
    return data.filter(work => {
      const key = `${category}ID`;
      return work.works[category] && work.works[category][key] === workID;
    }).shift();
  }

  mapToYoutube(youtube) {
    const youtubeOptions = {
      height: 760,
      width: 1350,
      playerVars: { autoplay: true }
    };

    if (Array.isArray(youtube)) {
      return youtube.map(youtubeID => (
          <WorkVideoContainer
            videoId={youtubeID}
            opts={youtubeOptions}/>
        )
      );
    } else {
      return (
        <WorkVideoContainer
          videoId={youtube}
          opts={youtubeOptions}/>
      );
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const category = prevProps.history.location.pathname.split('/')[2];
    const workID = parseInt(prevProps.history.location.pathname.split('/').pop(), 10);
    if (this.state.workID !== workID || this.state.category !== category) {
      const data = this.getWorkData(category, workID);
      this.setState({ category, workID, data });
    }
  }

  render() {
    const { data } = this.state;
    const work = data.works[this.state.category];
    const { youtube } = work;
    return (
      <Fragment>
        <Container>
          <WorkContainer>
            <WorkImageContainer>
              {
                youtube && this.mapToYoutube(youtube)
              }
              {
                work.rawImage && <WorkImage src={work.rawImage} alt={work.title}/>
              }
            </WorkImageContainer>
            <SideContainer>
              <CloseButton onClick={this.goBack}/>
              <TitleBox>
                <Category>{work.category.replace('_', ' ')}</Category>
                <Title>{work.title}</Title>
              </TitleBox>
              <Members>
                {
                  this.mapToMember(data)
                }
              </Members>
              <Line/>
              <ExplanationBox>
                <span className="title">작품설명</span>
                <p>{work.text}</p>
              </ExplanationBox>
            </SideContainer>
          </WorkContainer>
        </Container>
      </Fragment>
    );
  }
}

export default WorkDetail;
