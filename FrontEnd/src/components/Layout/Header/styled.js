// Absolute imports
import styled from 'styled-components';

export const HeaderContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background-color: ${({ theme }) => theme.headerColor};
  color: ${({ theme }) => theme.textColor};
  width: 100%;
  height: 50px;
  display: flex;
  border-bottom: 4px solid ${({ theme }) => theme.selectedColor};
  justify-content: center;
  z-index: 100;
`;

export const HeaderButton = styled.div`
vertical-align: middle;
display: table-cell;
padding-left: 15px;
padding-right: 15px;
height: 50px;
text-align: center; 
font-size: 17px;
background-color: ${(props) => 
  props.isSelected ?
  ({ theme }) => theme.selectedColor : 
  ({ theme }) => theme.headerColor};
`;

export const HomeButton = styled.div`
  color: ${({ theme }) => theme.textColor};
  position: fixed; 
  left: 0px;
`;

export const HeaderLinkContent = styled.div`
  vertical-align: middle;
  height: 49px;
  display: table-cell;
  background: ${({ theme }) => theme.headerColor};
  color: ${({ theme }) => theme.textColor};
  padding-left: 3px;
`;

export const ButtonsContainer = styled.div`
  height: 49px;
`;

export const LogInButton = styled.div`
  background-color: ${({ theme }) => theme.headerColor};
  position: fixed;
  top: 0;
  right: 0;  
  display: flex;
  align-items: center;
  height: 50px;
  text-align: center; 
  font-size: 17px;
  padding-right: 30px;  
`;