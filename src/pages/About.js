import React, { Fragment } from 'react';
import { Concept, Congratulations, Container, Entry, Footer, Intro, Location, Video } from '../components/About';


const About = () => {
  return (
    <Fragment>
      <Container>
        <Entry/>
        <Intro/>
        <Concept/>
        <Location/>
        <Video/>
        <Congratulations/>
        <Footer/>
      </Container>
    </Fragment>
  );
};


export default About;
