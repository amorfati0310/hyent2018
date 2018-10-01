import React, { Fragment, PureComponent } from 'react';
import SearchIconImage from '../../assets/images/header/ic_search.svg';
import styled from 'styled-components';
import searchData from '../../models/search_data';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';

const Container = styled.div`
  position: relative;
`;

const Form = styled.div`
  display: flex;
  align-items: center;
`;

const InputWrapper = styled.span`
  display: inline-block;
  position: relative;
  height: 30px;
  width: 260px;
  margin-top: 5px;
  
  span.line {
    position: absolute;
    bottom: -2px;
    left: 0;
    display: block;
    width: 0;
    height: 3px;
    background: linear-gradient(225.07deg,#97E055 0%,#80C9F6 50.68%,#A37CD8 100%);
    -webkit-transition: 1s ease;
    transition: width 250ms ease-in-out;
  }
  
  input:focus-within + span.line {
    width: 100%;
  }
`;

const Input = styled.input`
  font-size: 20px;
  font-weight: 300;
  font-family: NanumSquareOTF, sans-serif;
  color: #222222;
  line-height: 24px;
  border: none;
  -webkit-appearance: none;
  width: 100%;
  transition: color 250ms ease-in-out;
  
  &::-webkit-input-placeholder {
    padding-left: 0;
    text-align: left;
  }
  
  &::placeholder {
    color: #4A4A4A;
  }

  &:focus {
    outline: none;
    -webkit-appearance: none;
  }
  
  &:focus::placeholder {
    color: rgba(78,78,78, .3);
  }
  
`;

const SearchIcon = styled.i`
  display: inline-block;
  height: 41px;
  width: 40px;
  background-color: #9B9B9B;
  mask: url(${SearchIconImage}) no-repeat center;
  mask-size: cover;
  margin-right: 27px;
`;

const SearchResult = styled.ul`
  position: absolute;
  width: 80%;
  top: 100%;
  left: 67px;
  background-color: #FFF;
  padding-top: 10px;
`;

const Result = styled.li`
  display: block;
  width: 100%;
  padding: 10px;
  border-bottom: 1px solid #BBBBBB;
  border-right: 1px solid #BBBBBB;
  border-left: 1px solid #BBBBBB;
  font-size: 18px;
  font-weight: 300;
  &:first-child {
    border-top: 1px solid #BBBBBB;
  }
`;

const ResultLink = styled(Link)`
  color: #4A4A4A;
  text-decoration: none;
  cursor: pointer;
`;

class SearchForm extends PureComponent {

  _input = null;

  state = {
    searched: null
  };

  handleFilter = e => {
    const ESC = 27;
    const ENTER = 13;

    const { value } = e.currentTarget;
    const { keyCode } = e;
    let searched = null;

    if (!!value.length) {
      searched = searchData
        .filter(data => data.name.toLowerCase().includes(value.toLowerCase()))
        .slice(0, 10);
    } else {
      this.clearSearched();
    }

    switch (keyCode) {
      case ESC:
        this.clearSearched();
        break;
      case ENTER:
        searched && this.props.history.push(searched[0].url);
        this.clearSearched();
        break;
      default:
        this.setState({ searched });
        break;
    }
  };

  clearSearched() {
    setTimeout(() => {
      this._input.value = '';
      this.setState({ searched: null })
    }, 100);
  };

  render() {
    return (
      <Fragment>
        <Container>
          <Form onSubmit={() => false}>
            <SearchIcon/>
            <InputWrapper>
              <Input
                onKeyUp={this.handleFilter}
                onBlur={this.clearSearched.bind(this)}
                type="text"
                name="search"
                id="search"
                placeholder="이름 또는 작품제목으로 검색"
                autoComplete="off"
                ref={el => this._input = el}/>
              <span className="line"/>
            </InputWrapper>
          </Form>
          <SearchResult>
            {
              this.state.searched && this.state.searched.map((value, index) => (
                  <Result key={index}>
                    <ResultLink to={value.url} replace>{value.name}</ResultLink>
                  </Result>
                )
              )
            }
          </SearchResult>
        </Container>
      </Fragment>
    );
  }
}

export default withRouter(SearchForm);
