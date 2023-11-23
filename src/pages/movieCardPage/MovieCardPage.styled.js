import styled from 'styled-components';
import { Link } from 'react-router-dom';
export const Block = styled.div`
display: flex;
text-align: left;
margin:16px;
`;

export const FilmDetails = styled.div`
margin:16px;


`;

export const GoBack = styled(Link)`
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

export const Container = styled.div`
display: block;
text-align: left;
border-bottom: 1px solid;
margin: 16px;
border-bottom: 1px solid tomato;
    box-shadow: 0 2px 4px rgba(255, 99, 71, 0.5);

`
export const Title = styled.h2`
margin-left: 16px;`

export const LinkCastReviews = styled(Link)`
  color: black;
  text-decoration: none;
  font-size: 20px;
  list-style-type: none;
  border-bottom: 2px solid tomato;
 
    

&:hover,
&:focus {
  color: tomato;
  
}
`

export const List = styled.ul`
list-style-type: none;
margin: 0;
margin-top: 8px;
padding: 16px;
`;

export const ListItem = styled.li`
margin-top: 8px;
`