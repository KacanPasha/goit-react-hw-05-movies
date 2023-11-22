import React, { useEffect, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { getMovieDetails } from 'api/Api';
import stubImage from '../../images/stub.jpg';
import {
  Block,
  Btn,
  Container,
  FilmDetails,
  LinkCastReviews,
  List,
  ListItem,
  Title,
} from './MovieCardPage.styled';

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

  const location = useLocation()
  return (
    <div>
      <Container>
        <Link to={location.state?.from || '/'}>
          <Btn type="button">&larr; Go back</Btn>
        </Link>

        {film ? (
          <div>
            <Block>
              <div>
                {film.poster_path ? (
                  <img
                    width="300px"
                    height="450px"
                    src={`https://image.tmdb.org/t/p/w300/${film.poster_path}`}
                    alt={film.title}
                  />
                ) : (
                  <img
                    width="300px"
                    height="300px"
                    src={stubImage}
                    alt="No_Photo"
                  />
                )}
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
        <List>
          <ListItem>
            <LinkCastReviews to={`/movies/${id}/cast`} state={{from: location}}>Cast</LinkCastReviews>
          </ListItem>
          <ListItem>
            <LinkCastReviews to={`/movies/${id}/reviews`} state={{from: location}}>
              Reviews
            </LinkCastReviews>
          </ListItem>
        </List>
      </Container>
    </div>
  );
}
