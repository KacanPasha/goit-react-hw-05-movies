import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReviews } from 'api/Api';
import { List } from './ReviemsPage.styled';
import MovieCard from 'pages/movieCardPage/MovieKardCage';

export default function ReviewsPage() {
  const { id } = useParams();
  const [films, setFilm] = useState(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const movieDetails = await getReviews(id);
        setFilm(movieDetails);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };

    fetchReviews();
  }, [id]);

  return (
    <div>
      <MovieCard />
      <List>
        {films &&
        films.results &&
        Array.isArray(films.results) &&
        films.results.length > 0 ? (
          films.results.map(e => (
            <li key={e.id}>
              <h2>{e.author}</h2>
              <p>Character: {e.content}</p>
            </li>
          ))
        ) : (
          <li>
            {films && films.results && !Array.isArray(films.results)
              ? 'Sorry, no data available.'
              : 'No trending data available'}
          </li>
        )}
      </List>
    </div>
  );
}
