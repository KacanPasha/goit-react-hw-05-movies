
import {NavLink, Outlet } from 'react-router-dom';
import styled from 'styled-components';

 const Link = styled(NavLink)`
  &.active {
    color: orange;
  }
`;

export const Layout = () => {
  return (
    <div>
      <header>
        <Link to="/">Home</Link>
        <Link to="/movies">Movies</Link>
      </header>
      <Outlet/>
    </div>
  );
};
