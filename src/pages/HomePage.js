import React, { useState, useEffect } from 'react';
import { getTrending } from 'api/Api';
import { Link } from 'react-router-dom';
export default function HomePage() {
    const [trendingData, setTrendingData] = useState([]);
  console.log(trendingData.results);
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
      <ul>
      {Array.isArray(trendingData.results) ? (
        trendingData.results.map((e) => (
          <li key={e.id}>
            <Link to={`/movies/${e.id}`}>
              <p>{e.title}</p>
            </Link>
          </li>
        ))
      ) : (
        <li>No trending data available</li>
      )}
    </ul>
      );
}





