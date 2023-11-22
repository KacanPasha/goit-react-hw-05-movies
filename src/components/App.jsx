import React, { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './Layout/Layout';

const HomePage = lazy(() => import('pages/homePage/HomePage'));
const FilterPage = lazy(() => import('pages/filterPage/FilterPage'));
const MovieCard = lazy(() => import('pages/movieCardPage/MovieKardCage'));
const CardPage = lazy(() => import('pages/castPage/CastPage'));
const ReviewsPage = lazy(() => import('pages/reviemsPage/ReviemsPage'));

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
