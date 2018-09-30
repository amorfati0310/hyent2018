import React, { Fragment, PureComponent } from 'react';
import SearchIconImage from '../../assets/images/header/ic_search.svg';
import styled from 'styled-components';
import searchData from '../../models/search_data';
import { Link } from 'react-router-dom';


// TODO: Make search form with RxJS
const Container = styled.div`
  position: relative;
`;

const Form = styled.form`
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
`;

const Result = styled.li`
  display: block;
  width: 100%;
  padding: 10px;
  border-bottom: 1px solid #BBBBBB;
  border-right: 1px solid #BBBBBB;
  border-left: 1px solid #BBBBBB;
  font-size: 20px;
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

  state = {
    searched: null
  };

  clearSearched () {
    this.setState({ searched: null })
  }

  handleFilter = e => {
    const ESC = 27;

    const { value } = e.currentTarget;
    const { keyCode } = e;

    const searched = searchData.filter(data => data.name.toLowerCase().includes(value.toLowerCase()));

    switch (keyCode) {
      case ESC:
        this.clearSearched();
        break;
      default:
        this.setState({ searched });
        break;
    }
  };

  render() {
    return (
      <Fragment>
        <Container>
          <Form>
            <SearchIcon/>
            <Input
              onKeyUp={this.handleFilter}
              type="search"
              name="search"
              id="search"
              placeholder="이름 또는 작품제목으로 검색"/>
          </Form>
          <SearchResult>
            {
              this.state.searched && this.state.searched.map((value, index) => (
                <Result key={index}>
                  <ResultLink onClick={this.clearSearched} to={value.url}>{value.name}</ResultLink>
                </Result>
              ))
            }
          </SearchResult>
        </Container>
      </Fragment>
    );
  }
}

export default SearchForm;
