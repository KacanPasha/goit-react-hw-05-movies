import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getMovieDetails } from 'api/Api';
import {
  Block,
  Btn,
  Container,
  FilmDetails,
  Title,
} from 'components/MovieCard/MovieKard.stily';

export default function MovieCard() {
  const { id } = useParams();
  const [film, setFilm] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const movieDetails = await getMovieDetails(id);
        setFilm(movieDetails);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };

    fetchMovieDetails();
  }, [id]);

  return (
    <div>
      <Container>
        <Link to="/">
          <Btn type="button">&larr; Go back</Btn>
        </Link>

        {film ? (
          <div>
            <Block>
              <div>
                <img
                  src={`https://image.tmdb.org/t/p/w300/${film.poster_path}`}
                  alt={film.title}
                />
              </div>
              <FilmDetails>
                <h1>
                  {film.title} ({film.release_date.substring(0, 4)})
                </h1>
                <p>User Score: {Math.round(film.vote_average * 10)}%</p>
                <h2>Overview</h2>
                <p>{film.overview}</p>
                <h2>Genres:</h2>
                <p>
                  {film.genres.map((e, index) => {
                    const genre = e.name;
                    return (
                      <span key={e.id}>
                        {genre}
                        {index < film.genres.length - 1 ? ', ' : ';'}
                      </span>
                    );
                  })}
                </p>
              </FilmDetails>
            </Block>
          </div>
        ) : (
          'Loading...'
        )}
      </Container>
      <Container>
        <Title>Additional information</Title>
        <ul>
          <li>
            <Link to={`/movies/${id}/cast`}>Cast</Link>
          </li>
          <li>
            <Link to={`/movies/${id}/reviews`}>Reviews</Link>
          </li>
        </ul>
      </Container>
    </div>
  );
}
