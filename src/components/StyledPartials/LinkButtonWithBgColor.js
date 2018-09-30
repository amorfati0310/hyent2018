import styled from 'styled-components';
import { Link } from 'react-router-dom';

const LinkButtonWithBgColor = styled(Link)`
  display: block;
  margin: 0 auto;
  position: relative;
  width: 457px;
  height: 126px;
  font-size: 42px;
  font-weight: 800;
  line-height: 126px;
  border: 2px solid #4A4A4A;
  background-color: #FFF;
  color: #001B3B;
  cursor: pointer;
  transition: all 1s linear;
  text-decoration: none;
  text-align: center;
  
  &:hover {
    top: -5px;
    left: -5px;
  }
  
  &:hover:after {
    top: 25px;
    left: 25px;
    background: transparent;
  }
  
  &:after {
    content: '';
    position: absolute;
    display: inline-block;
    width: 457px;
    height: 126px;
    top: 20px;
    left: 20px;
    border: 2px solid #4A4A4A;
    z-index: -1;
    background: linear-gradient(225.07deg, #97E055 0%, #80C9F6 50.68%, #A37CD8 100%);
  }
`;

export default LinkButtonWithBgColor;
