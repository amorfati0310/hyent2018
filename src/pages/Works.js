import React, { Component, Fragment } from 'react';
import styled, { css } from 'styled-components';
import { Title } from '../components/Designers/Title';
import { Work } from '../components/Works';
import TitleImage from '../assets/images/works/title_works.svg';
import AllActive from '../assets/images/designers/btn_works_all_s.svg';
import AllInactive from '../assets/images/designers/btn_works_all_n.svg';
import DigitalActiveImage from '../assets/images/works/btn_works_digitalmedia_s.svg';
import DigitalInactiveImage from '../assets/images/works/btn_works_digitalmedia_n.svg';
import InteractiveActiveImage from '../assets/images/works/btn_works_interactive_s.svg';
import InteractiveInactiveImage from '../assets/images/works/btn_works_interactive_n.svg';
import MotionActiveImage from '../assets/images/works/btn_works_motion_s.svg';
import MotionInactiveImage from '../assets/images/works/btn_works_motion_n.svg';
import data from '../models/data';

const Container = styled.article`
  padding-top: 120px;
`;


const SideContent = styled.aside`
  position: fixed;
  top: 120px;
  left: 0;
  padding-top: 72px;
  padding-left: 91px;
  height: 100vh;
  z-index: 1;
  overflow: hidden;
  overflow-y: scroll;
`;

const Description = styled.p`
  margin-top: 34px;
  margin-bottom: 105px;
	width: 190px;
	color: #4A4A4A;
	font-family: NanumSquareOTF, sans-serif;
	font-size: 15px;
	letter-spacing: 0.19px;
	line-height: 26px;
`;

const VisibilityFilter = styled.a`
  display: block;
  width: 200px;
  height: 60px;
  margin-bottom: 62px;
  border: none;
  background-size: cover;
  cursor: pointer;
  ${props => props.image && css`
    background: url(${props.image}) no-repeat left;
    margin-left: 10px;
  `}
  ${props => !props.active && css`
    margin-left: 15px;
  `} 
`;

const WorkContainer = styled.ul`
  margin-top: 140px;
  margin-left: 358px;
  display: flex;
  flex-wrap: wrap;
`;

class Works extends Component {
  state = {
    visibilityFilter: 'all',
    works: data
  };

  handleVisibilityFilter = visibilityFilter => {
    this.setState({ visibilityFilter });
  };

  render() {
    const filters = [
      { type: 'all', activeImage: AllActive, defaultImage: AllInactive },
      { type: 'digital', activeImage: DigitalActiveImage, defaultImage: DigitalInactiveImage },
      { type: 'interactive', activeImage: InteractiveActiveImage, defaultImage: InteractiveInactiveImage },
      { type: 'motion', activeImage: MotionActiveImage, defaultImage: MotionInactiveImage },
    ];

    const { visibilityFilter } = this.state;

    return (
      <Fragment>
        <Container>
          <SideContent>
            <Title titleImage={TitleImage}/>
            <Description>2018 졸업전시회 ‘층층다리’의 작품들을 만나보세요!</Description>
            {
              filters.map((filter, index) => {
                const active = filter.type === this.state.visibilityFilter;
                return (
                  <VisibilityFilter
                    key={index}
                    active={active}
                    image={active ? filter.activeImage : filter.defaultImage}
                    onClick={this.handleVisibilityFilter.bind(null, filter.type)}
                  />
                );
              })
            }
          </SideContent>
          <WorkContainer>
            {
              this.state.works
                .map(work => {
                  return Object.keys(work['works'])
                    .filter(key => visibilityFilter === 'all' ? true : key === visibilityFilter)
                    .map((key, index) => (
                      <Work
                        key={index}
                        realCategory={key}
                        workID={work['works'][key][`${key}ID`]}
                        workImage={work['works'][key].thumbnailImage}
                        title={work['works'][key].title}
                        name={work.name}
                        category={work['works'][key].category.replace('_', ' ')}/>
                    )
                  );
                })
            }
          </WorkContainer>
        </Container>
      </Fragment>
    );
  }
}

export default Works;
