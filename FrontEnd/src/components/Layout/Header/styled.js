import { NavLink } from 'react-router-dom'
import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background-color: #e4e6e9;
  width: 100%;
  height: 50px;
  display: flex;
  border-bottom: 3px solid #f9b2b2;
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
  background: #e4e6e9
`;

export const HeaderLink = styled(NavLink)`
  text-decoration: none;
  color: black;
`;

export const HomeButton = styled.div`
  position: fixed; 
  left: 0px
`;

export const ButtonsContainer = styled.div`
  height: 49px;
`;

export const Button = styled.div`
  vertical-align: middle;
  display: table-cell;
  width: 100px;
  height: 49px;
  background: #e4e6e9;
  text-align: center; 
  font-size: 16px
`;


