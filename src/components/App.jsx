import CardPage from 'pages/CastPage';
import FilterPage from 'pages/FilterPage';
import HomePage from 'pages/HomePage';
import MovieCard from 'pages/MovieKardPage';
import React from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Link = styled(NavLink)`
  &.active {
    color: orange;
  }
`;

export const App = () => {
  return (
    <div>
      <header>
        <Link to="/">Home</Link>
        <Link to="/movies">Movies</Link>
      </header>
      <Routes>
        <Route path="/" element={<HomePage />} />;
        <Route path="/movies" element={<FilterPage />} />;
        <Route path="/movies/:id" element={<MovieCard />} />;
        <Route path="/movies/:id/:cast" element={<CardPage/>} />;
        <Route
          path="/movies/:id/:reviews:"
          element={<div>Hi movies id reviews</div>}
        />
        ;
      </Routes>
    </div>
  );
};
