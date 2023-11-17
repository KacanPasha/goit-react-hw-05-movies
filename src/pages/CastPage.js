import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCast } from 'api/Api';

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
  console.log(films);

  return (
    <ul>
      {films && Array.isArray(films.cast) ? (
        films.cast.map((e) => (
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
                height="450px"
                src=".../public/logo.png"
                alt="No_Photo"
              />
            )}
            <h2>{e.name}</h2>
            <p>Character: {e.character}</p>
          </li>
        ))
      ) : (
        <li>No trending data available</li>
      )}
    </ul>
  );
}
