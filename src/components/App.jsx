import CardPage from 'pages/CastPage';
import FilterPage from 'pages/FilterPage';

import MovieCard from 'pages/MovieKardPage';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import HomePage from 'pages/HomePage';


export const App = () => {
  return (
    <Routes >
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="movies" element={<FilterPage />} />;
        <Route path="movies/:id" element={<MovieCard />} />;
        <Route path="movies/:id/:cast" element={<CardPage />} />;
        <Route path="movies/:id/:reviews" element={<div>cdasdcas</div>} />;
      </Route>
      ;
    </Routes>
  );
};
