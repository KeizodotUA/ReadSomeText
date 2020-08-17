// Absolute imports
import styled from 'styled-components';

export const Content = styled.div`
  display: block;
  position: fixed;
  top: 54px;
  left: 0;
  width: 100%;
  height: calc(100% - 54px); 
  overflow: auto;
  background-color: ${({ theme }) => theme.bodyColor};
  color: ${({ theme }) => theme.textColor};
`;