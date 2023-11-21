import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  background-color: rgba(255, 99, 71, 0.2);
  color: black;
  font-size: 40px;
  text-decoration: none;
  margin: 16px;
  border-radius: 10px;
  padding: 8px;
  &.active {
    color: black;
    background-color: tomato;
  }
`;
export const Container = styled.header`
  display: flex;
  border-bottom: 1px solid tomato;
  box-shadow: 0 2px 4px rgba(255, 99, 71, 0.5);
`;
