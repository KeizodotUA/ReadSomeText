// Absolute imports
import styled from 'styled-components';

export const Container = styled.div`
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

export const NavigationButton = styled.div`
  vertical-align: middle;
  display: table-cell;
  padding-left: 15px;
  padding-right: 15px;
  height: 35px;
  text-align: center; 
  font-size: 17px;
  background-color: ${(props) => (props.btnColor)};
  color: #000000;
  &:hover {
    font-weight: 600
  }
`;