import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReviews } from 'api/Api';


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
  console.log(films);

  return (
    <ul>
      {films && Array.isArray(films.cast) ? (
        films.cast.map(e => (
          <li key={e.id}>
            
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
