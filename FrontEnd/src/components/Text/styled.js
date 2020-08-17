// Absolute imports
import styled from 'styled-components';

export const Container = styled.div`
    display: grid;
    color: ${({ theme }) => theme.textColor};
`;

export const TitleContainer = styled.div`
    display: block;
    margin-top: 50px;
    width: 100%;
    height: 80px; 
`;

export const CountContainer = styled.div`
    width: 100%;
    display: block;
    margin-top: 10px;
    height: 80px;
`;

export const TextContainer = styled.div`
    display: block;
    margin-top: 30px;
    margin-left: 30px;
    margin-right: 30px;
    background-color: ${({ theme }) => theme.textContainerColor};    
    font-size: 15px;
`;

export const InfoContent = styled.div`
    padding-left: 30px;
    padding-right: 30px;
    display: block;
    margin-left: auto;
    margin-right: auto;
    text-align: center;     
`;

export const CountContent = styled.div`
    display: block;
    width: 50%;
    text-align: center;
`;

export const H2 = styled.h2`
    font-size: 19px;
    fontWeight: 400;
    background-color: ${({ theme }) => theme.darkTableColor};
    margin: 0; 
    padding: 5px; 
    height: 30px
`;

export const H3 = styled.h2`
    font-size: 25px;
    fontWeight: 400;
    background-color: ${({ theme }) => theme.darkTableColor};
    margin: 0; 
    padding: 5px; 
    height: 30px
`;