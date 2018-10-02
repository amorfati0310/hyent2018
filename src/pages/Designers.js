import React, { Component, Fragment } from 'react';
import styled, { css } from 'styled-components';
import { Designer } from '../components/Designers';
import Hangul from 'hangul-js';
import AllActive from '../assets/images/designers/btn_works_all_s.svg';
import AllInactive from '../assets/images/designers/btn_works_all_n.svg';
import GiyeokActive from '../assets/images/designers/btn_dsnr_giyeok_s.svg';
import GiyeokInactive from '../assets/images/designers/btn_dsnr_giyeok_n.svg';
import NMActive from '../assets/images/designers/btn_dsnr_nm_s.svg';
import NMInactive from '../assets/images/designers/btn_dsnr_nm_n.svg';
import BieopActive from '../assets/images/designers/btn_dsnr_b_s.svg';
import BieopInactive from '../assets/images/designers/btn_dsnr_b_n.svg';
import SieotActive from '../assets/images/designers/btn_dsnr_s_s.svg';
import SieotInactive from '../assets/images/designers/btn_dsnr_s_n.svg';
import OActive from '../assets/images/designers/btn_dsnr_o_s.svg';
import OInactive from '../assets/images/designers/btn_dsnr_o_n.svg';
import JieotChieotActive from '../assets/images/designers/btn_dsnr_jc_s.svg';
import JieotChieotInactive from '../assets/images/designers/btn_dsnr_jc_n.svg';
import KiyeokHieotActive from '../assets/images/designers/btn_dsnr_kh_s.svg';
import KiyeokHieotInactive from '../assets/images/designers/btn_dsnr_kh_n.svg';
import TitleImage from '../assets/images/designers/title_designers.png';
import { Title } from '../components/StyledPartials/TitleWithBgColor';
import data from '../models/data';
import { Link } from 'react-router-dom';


const Container = styled.article`
  padding-top: 120px;
  max-width: 1920px;
  margin: 0 auto;
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
  width: 120px;
  height: 22px;
  margin-bottom: 45px;
  border: none;
  background-size: cover;
  cursor: pointer;
  ${props => props.image && css`
    background: url(${props.image}) no-repeat left;
    margin-left: 10px;
  `}
  ${props => !props.active && css`
    margin-left: 45px;
  `} 
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
  &::-webkit-scrollbar { 
    display: none; 
  }
`;

const DesignersList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin-top: 188px;
  margin-left: 481px;
  margin-right: 100px;
`;


class Designers extends Component {
  static filters = ['ga', 'nama', 'ba', 'sa', 'o', 'jacha', 'kaha'];

  handleVisibilityFilter = visibilityFilter => {
    this.setState({ visibilityFilter });
    this.setQueryString(visibilityFilter);
  };

  filterConsonant = name => {
    switch (this.state.visibilityFilter) {
      case 'all':
        return true;
      case 'ga':
        return Hangul.disassemble(name).shift() === 'ㄱ';
      case 'nama':
        return !!~['ㄴ', 'ㄷ', 'ㄹ', 'ㅁ'].indexOf(Hangul.disassemble(name).shift());
      case 'ba':
        return Hangul.disassemble(name).shift() === 'ㅂ';
      case 'sa':
        return Hangul.disassemble(name).shift() === 'ㅅ';
      case 'o':
        return Hangul.disassemble(name).shift() === 'ㅇ';
      case 'jacha':
        return !!~['ㅈ', 'ㅊ'].indexOf(Hangul.disassemble(name).shift());
      case 'kaha':
        return !!~['ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'].indexOf(Hangul.disassemble(name).shift());
      default:
        return;
    }
  };

  constructor(props) {
    super(props);
    this.props.sideVisible && this.props.handleSideMenu();
    const visibilityFilter = this.getFilterQueryString();
    this.setQueryString(visibilityFilter);
    this.state = {
      visibilityFilter,
      designers: data
    };
  }

  getFilterQueryString() {
    const parsed = new URLSearchParams(this.props.location.search);
    let visibilityFilter = parsed.get('filter') || 'all';
    const isValidFilter = Designers.filters.find(filter => filter === visibilityFilter);
    return isValidFilter ? visibilityFilter : 'all';
  }

  setQueryString(visibilityFilter) {
    this.props.history.push({
      search: `?filter=${visibilityFilter}`
    });
  }

  componentDidMount() {
    const visibilityFilter = this.getFilterQueryString();
    this.setState({ visibilityFilter });
    this.setQueryString(visibilityFilter);
  }

  componentDidUpdate(prevProps, prevState, snapShot) {
    const visibilityFilter = this.getFilterQueryString();
    if (visibilityFilter !== this.state.visibilityFilter) {
      this.setState({ visibilityFilter })
    }
  }


  render() {
    const filters = [
      { type: 'all', activeImage: AllActive, defaultImage: AllInactive },
      { type: 'ga', activeImage: GiyeokActive, defaultImage: GiyeokInactive },
      { type: 'nama', activeImage: NMActive, defaultImage: NMInactive },
      { type: 'ba', activeImage: BieopActive, defaultImage: BieopInactive },
      { type: 'sa', activeImage: SieotActive, defaultImage: SieotInactive },
      { type: 'o', activeImage: OActive, defaultImage: OInactive },
      { type: 'jacha', activeImage: JieotChieotActive, defaultImage: JieotChieotInactive },
      { type: 'kaha', activeImage: KiyeokHieotActive, defaultImage: KiyeokHieotInactive },
    ];
    return (
      <Fragment>
        <Container>
          <SideContent>
            <Title titleImage={TitleImage}/>
            <Description>2018 졸업전시회 ‘층층다리’의 디자이너들을 소개합니다!</Description>
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
          <DesignersList>
            {
              this.state.designers
                .filter(designer => this.filterConsonant(designer.name))
                .map((designer, index) => (
                  <Link key={index} to={`/designer/${designer.id}`}>
                    <Designer
                      marginRight="30px"
                      key={index}
                      name={designer.name}
                      nameEn={designer.nameEn}
                      photo={designer.photo}/>
                  </Link>
                ))
            }
          </DesignersList>
        </Container>
      </Fragment>
    );
  }
}

export default Designers;
