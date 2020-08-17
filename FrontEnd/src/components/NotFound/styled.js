import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background-color: ${({ theme }) => theme.bodyColor};
  width: 100%;
  height: 100%;
  padding: 50px;
  color: ${({ theme }) => theme.textColor};
`;

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    float: left;
    width: 100%;
`;

export const HomeButton = styled.div`
    height: 35px;
    width: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${({ theme }) => theme.textColor};
    background-color: ${({ theme }) => theme.headerTableColor};
    &:hover {
    background-color: ${({ theme }) => theme.textContainerColor};
  }
`;