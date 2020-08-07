import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: auto;
  padding: 50px;
`;

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    float: left;
    width: 100%
`;

export const HomeButton = styled.div`
    height: 35px;
    width: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #eceef0;
    &:hover {
    background-color: #ffffff;
  }
`;