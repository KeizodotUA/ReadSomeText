// Absolute imports
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center; 
`;

export const TableContainer = styled.div`
  width: 85%;
  margin-top: 50px;
  margin-bottom: 50px;
`;

export const TableRow = styled.tr`
  width: 85%;
  margin-top: 25px;
  background-color: ${(props) => (props.rowColor)};
  &:hover {
    background-color: #ffffff;
  }
`;
