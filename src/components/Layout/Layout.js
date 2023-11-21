import { Outlet } from 'react-router-dom';
import { Link, Container } from './Layout.styled';

export const Layout = () => {
  return (
    <div>
      <Container>
        <Link to="/">Home</Link>
        <Link to="/movies">Movies</Link>
      </Container>
      <Outlet />
    </div>
  );
};
