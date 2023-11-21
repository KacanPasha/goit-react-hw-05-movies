import CardPage from 'pages/castPage/CastPage';
import FilterPage from 'pages/filterPage/FilterPage';

import MovieCard from 'pages/movieCardPage/MovieKardCage';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import HomePage from 'pages/homePage/HomePage';
import ReviewsPage from 'pages/reviemsPage/ReviemsPage';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="movies" element={<FilterPage />} />;
        <Route path="movies/:id" element={<MovieCard />} />;
        <Route path="movies/:id/cast" element={<CardPage />} />;
        <Route path="movies/:id/reviews" element={<ReviewsPage />} />;
      </Route>
      ;
    </Routes>
  );
};
