// Absolute imports
import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  top: 54px;
  left: 0;
  background-color: #d5d8dd;
  color: #00000;
  width: 100%;
  z-index: 100;
  width: 100%;
  height: auto;
`;

export const Input = styled.input`
  width: 90%;
  display: block;
  margin-left: auto;
  margin-right: auto;  
  margin-top: 10px;
  margin-bottom: 5px;
  height: 35px; 
  text-align: center;
  outline: none;
  border: none;
  border-bottom: 1px solid #f9b2b2;
  background-color: #d5d8dd; 
  font-size: 18px;  
  &::placeholder {    
    color: #f9b2b2;
    font-size: 18px;
    vertical-align: middle;
  };
`;

export const Button = styled.div`
    height: 35px;
    width: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;  
    margin-top: 30px;
    margin-bottom: 30px;
    background-color: #4e5560;
`;