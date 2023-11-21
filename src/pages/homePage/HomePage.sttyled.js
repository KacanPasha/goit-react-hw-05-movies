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

export const Block = styled.div`
 text-align: left;
 margin-left: 16px;
`
