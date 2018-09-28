import React, { Fragment, PureComponent } from 'react';
import styled from 'styled-components';
import { DefaultSection } from './Partials';

const VideoSection = styled(DefaultSection)``;

class Video extends PureComponent {
  render() {
    return (
      <Fragment>
        <VideoSection className="section video"/>
      </Fragment>
    );
  }
}

export default Video;
