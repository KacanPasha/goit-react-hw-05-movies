import { Outlet } from 'react-router-dom';
import { Link, Container } from './Layout.styled';
import React, { Suspense } from 'react';
export const Layout = () => {
  return (
    <div>
      <Container>
        <Link to="/">Home</Link>
        <Link to="/movies">Movies</Link>
      </Container>
      <Suspense fallback={'Loading...'}>
        <Outlet />
      </Suspense>
    </div>
  );
};
