import React, { Fragment, PureComponent } from 'react';
import SearchIconImage from '../../assets/images/header/ic_search.svg';
import styled from 'styled-components';


// TODO: Make search form with RxJS
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

class SearchForm extends PureComponent {
  render() {
    return (
      <Fragment>
        <Form>
          <SearchIcon/>
          <Input type="search" name="search" id="search" placeholder="이름 또는 작품제목으로 검색"/>
        </Form>
      </Fragment>
    );
  }
}

export default SearchForm;
