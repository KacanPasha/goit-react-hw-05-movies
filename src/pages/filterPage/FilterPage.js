import React, { useState, useEffect } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import { getMovies } from 'api/Api';

import {
  Block,
  Btn,
  Container,
  FilmLink,
  Input,
  List,
  Title,
} from './FilterPage.styled';

export default function FilterPage() {
  const [queryResult, setQueryResult] = useState([]);
  const location = useLocation();

  const [params, setParams] = useSearchParams();
  const [locationPath, setLocationPath] = useState(location);
  const filter = params.get('filter') ?? '';

  const changeFilter = evt => {
    setParams({ filter: evt.target.value });
  };

  const handleSubmit = async event => {
    event.preventDefault();
    if (filter === '') {
      alert('Please fill in the search field.');
    } else {
      setLocationPath(location);
      await query(filter);
    }
  };

  const query = async filter => {
    if (filter !== null) {
      try {
        const result = await getMovies(filter);
        setQueryResult(result);
        console.log(result);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    }
  };

  useEffect(() => {
    if (filter !== '') {
      query(filter);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="SearchBar">
      <Container onSubmit={handleSubmit}>
        <Input
          value={filter}
          onChange={changeFilter}
          placeholder="Search images and photos"
        />
        <Btn type="submit">Submit</Btn>
      </Container>
      <Block>
        {queryResult.length === 0 ? (
          ''
        ) : (
          <List>
            {queryResult.results.map(e => (
              <li key={e.id}>
                <FilmLink to={`/movies/${e.id}`} state={{ from: locationPath }}>
                  <Title>{e.title}</Title>
                </FilmLink>
              </li>
            ))}
          </List>
        )}
      </Block>
    </div>
  );
}
