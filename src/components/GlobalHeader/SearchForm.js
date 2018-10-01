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

const Input = styled.input`
  display: inline-block;
  margin-top: 5px;
  font-size: 20px;
  font-weight: 300;
  font-family: NanumSquareOTF, sans-serif;
  color: #222222;
  height: 24px;
  width: 260px;
  line-height: 24px;
  border: none;
  
  &::placeholder {
    color: #4A4A4A;
  }

  &:focus {
    outline: none;
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
    this._input.value = '';
    this.setState({ searched: null });
  };

  render() {
    return (
      <Fragment>
        <Container>
          <Form onSubmit={() => false}>
            <SearchIcon/>
            <Input
              onKeyUp={this.handleFilter}
              onBlur={this.clearSearched.bind(this)}
              type="search"
              name="search"
              id="search"
              placeholder="이름 또는 작품제목으로 검색"
              autoComplete="off"
              ref={el => this._input = el}/>
          </Form>
          <SearchResult>
            {
              this.state.searched && this.state.searched.map((value, index) => (
                <Result key={index}>
                  <ResultLink to={value.url}>{value.name}</ResultLink>
                </Result>
              ))
            }
          </SearchResult>
        </Container>
      </Fragment>
    );
  }
}

export default withRouter(SearchForm);
