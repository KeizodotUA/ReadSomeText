// Absolute imports
import { NavLink } from 'react-router-dom'
import styled from 'styled-components';

export const HeaderContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background-color: #d5d8dd;
  color: #000000;
  width: 100%;
  height: 50px;
  display: flex;
  border-bottom: 4px solid #f9b2b2;
  justify-content: center;
  z-index: 100;
`;

export const NavigationContainer = styled.div`
  position: fixed;
  top: 54px;
  left: 0;
  background-color: #d5d8dd;
  color: 00000;
  width: 100%;
  z-index: 100;
  display: flex;
  justify-content: center;
`;

export const LogoContainer = styled.div`
  top: 0;
  left: 0;
  height: 50px;
`;

export const HeaderLinkContent = styled.div`
  vertical-align: middle;
  height: 49px;
  display: table-cell;
  background: #d5d8dd;
  color: #000000;
  padding-left: 3px;
`;

export const NavigationLink = styled(NavLink)`
  text-decoration: none;
  color: black;
`;

export const HomeButton = styled.div`
  color: #000000;
  position: fixed; 
  left: 0px;
`;

export const ButtonsContainer = styled.div`
  height: 49px;
`;

export const NavigationButton = styled.div`
  vertical-align: middle;
  display: table-cell;
  padding-left: 15px;
  padding-right: 15px;
  height: 35px;
  text-align: center; 
  font-size: 17px;
  background-color: #d5d8dd;
  color: #000000;
  &:hover {
    font-weight: 600
  }
`;

export const HeaderButton = styled.div`
vertical-align: middle;
display: table-cell;
padding-left: 15px;
padding-right: 15px;
height: 50px;
text-align: center; 
font-size: 17px;
background-color: ${(props) => (props.btnColor)};
`;