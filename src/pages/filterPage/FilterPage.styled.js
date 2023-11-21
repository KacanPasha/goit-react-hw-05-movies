import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const List = styled.ul`
  list-style-type: none;
  display: inline-block;
  text-align: left;
  margin: 0;
  padding: 0;
`;

export const FilmLink = styled(Link)`
  color: black;
  text-decoration: none;
  height: 100%;
  width: 100%;
`;

export const Title = styled.p`
  font-size: 20px;
  border-bottom: 2px solid tomato;
  height: 100%;
  width: 100%;

  &:hover,
  &:focus {
    color: tomato;
  }
  
`;

export const Btn = styled.button`
  background-color: rgba(255, 99, 71, 0.2);
  color: black;
  font-size: 20px;
  text-decoration: none;
  margin: 16px;
  border-radius: 10px;
  border: none;
  padding: 8px;
  &:hover,
  &:focus {
    background-color: tomato;
  }
`;
export const Input = styled.input`
height: 38px;
border-radius: 4px;
margin-left: 16px;

border-color: rgba(255, 99, 71, 0.2);

  &:hover,
  &:focus {
    border-color: tomato;
  }
`
export const Container = styled.form`
display: flex;
align-items: center;

border-bottom: 1px solid tomato;
  box-shadow: 0 2px 4px rgba(255, 99, 71, 0.5);
`
export const Block = styled.div`
 text-align: left;
 margin-left: 16px;
`
