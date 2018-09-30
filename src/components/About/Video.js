import styled from 'styled-components';
import { DefaultSection } from './Partials';
import YouTube from 'react-youtube';
import SideIndex from './Partials/SideIndex';
import Number03Image from '../../assets/images/side_indicator/num03.svg';
import React, { Fragment, PureComponent } from 'react';


const VideoSection = styled(DefaultSection)`
  padding-top: 120px;
  background-color: #1D517E;
`;

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const IFrameContainer = styled.div`
  position: absolute;
  width: 1142px;
  height: 644px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 2px solid #FFF;
  
  &:before {
    content: '';
    position: absolute;
    display: block;
    top: 27px;
    left: 25px;
    width: 1138px;
    height: 640px;
    border: 2px solid #FFF;
    z-index: -1;
  }
`;


class Video extends PureComponent {
  render() {
    const youtubeOptions = {
      height: 640,
      width: 1138,
      playerVars: { autoplay: 0 }
    };
    return (
      <Fragment>
        <VideoSection className="section video">
          <SideIndex label="홍보영상" marginRight={156} indexImage={Number03Image}/>
          <Container>
            <IFrameContainer>
              <YouTube
                videoId="UmOFJHZfSBg"
                opts={youtubeOptions}
              />
            </IFrameContainer>
          </Container>
        </VideoSection>
      </Fragment>
    );
  }
}

export default Video;
