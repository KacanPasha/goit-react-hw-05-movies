import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCast } from 'api/Api';
import stubImage from '../../images/stub.jpg';
import { List } from './CastPage.styled';
import MovieCard from 'pages/movieCardPage/MovieKardCage';

export default function CardPage() {
  const { id } = useParams();
  const [films, setFilm] = useState(null);

  useEffect(() => {
    const fetchCast = async () => {
      try {
        const movieDetails = await getCast(id);
        setFilm(movieDetails);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };

    fetchCast();
  }, [id]);

  return (
    <div>
      <MovieCard />
      <List>
        {films &&
        films.cast &&
        Array.isArray(films.cast) &&
        films.cast.length > 0 ? (
          films.cast.map(e => (
            <li key={e.id}>
              {e.profile_path ? (
                <img
                  width="300px"
                  height="450px"
                  src={`https://image.tmdb.org/t/p/w300/${e.profile_path}`}
                  alt={e.name}
                />
              ) : (
                <img
                  width="300px"
                  height="300px"
                  src={stubImage}
                  alt="No_Photo"
                />
              )}
              <h2>{e.name}</h2>
              <p>Character: {e.character}</p>
            </li>
          ))
        ) : (
          <li>
            {films && films.cast && films.cast.length === 0
              ? 'Sorry, no data available.'
              : 'No trending data available'}
          </li>
        )}
      </List>
    </div>
  );
}
