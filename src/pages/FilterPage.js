import React, { useState } from 'react';
import { getMovies } from 'api/Api';
import { Link } from 'react-router-dom';

export default function FilterPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [queryResult, setQueryResult] = useState([]);

  const handleSubmit = async event => {
    event.preventDefault();
    if (searchQuery === '') {
      alert('Please fill in the search field.');
    } else {
      await query(searchQuery);
    }
  };

  const query = async searchQuery => {
    if (searchQuery !== null) {
      try {
        const result = await getMovies(searchQuery);
        setQueryResult(result);
        console.log(result);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    }
  };

  const handleInputChange = event => {
    setSearchQuery(event.target.value);
  };

  return (
    <div className="SearchBar">
      <form onSubmit={handleSubmit}>
        <input
          value={searchQuery}
          onChange={handleInputChange}
          placeholder="Search images and photos"
        />
        <button className="SearchForm-button" type="submit">
          Submit
        </button>
      </form>
      <div>
        {queryResult.length === 0 ? (
          'Enter the movie name'
        ) : (
          <ul>
            {queryResult.results.map(e => (
              <li key={e.id}>
                <Link to={`/movies/${e.id}`}>
                <p>{e.title}</p>
                </Link>
              
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
