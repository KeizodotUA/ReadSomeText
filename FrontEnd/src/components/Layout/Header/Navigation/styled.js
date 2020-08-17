// Absolute imports
import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  top: 54px;
  left: 0;
  background-color: ${({ theme }) => theme.headerColor};
  color: ${({ theme }) => theme.textColor};
  width: 100%;
  z-index: 100;
  display: flex;
  justify-content: center;
`;

export const NavigationButton = styled.div`
  vertical-align: middle;
  display: table-cell;
  padding-left: 15px;
  padding-right: 15px;
  height: 35px;
  text-align: center; 
  font-size: 17px;
  background-color: ${(props) => 
  props.isImplemented ?
  ({ theme }) => theme.headerColor : 
  ({ theme }) => theme.disabledColor};
  color: ${({ theme }) => theme.textColor};
  &:hover {
    font-weight: 600
  }
`;