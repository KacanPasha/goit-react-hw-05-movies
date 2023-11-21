import React, { useState, useEffect } from 'react';
import { getTrending } from 'api/Api';
import { Block, FilmLink, List, Title } from './HomePage.sttyled';

export default function HomePage() {
  const [trendingData, setTrendingData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getTrending();
        setTrendingData(data);
      } catch (error) {
        console.error('Ошибка при получении данных:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <Block>
      <h1>Trending today</h1>
        <List>
      {Array.isArray(trendingData.results) ? (
        trendingData.results.map(e => (
          <li key={e.id}>
            <FilmLink to={`/movies/${e.id}`}>
              <Title>{e.title}</Title>
            </FilmLink>
          </li>
        ))
      ) : (
        <li>No trending data available</li>
      )}
    </List>
    </Block>

  );
}
