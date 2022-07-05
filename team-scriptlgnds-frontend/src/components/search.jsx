import { React, useState, useEffect } from 'react';
import axios from 'axios';
import '../stylesheets/search.css';

function Search() {
  const [/* games */, setGames] = useState([]);
  const [enteredTitle, setEnteredTitle] = useState('');

  useEffect(() => {}, []);

  const handleChange = (e) => {
    e.preventDefault();
    setEnteredTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let url = 'http://localhost:3001/games/search/' + enteredTitle;

    axios.get(url).then((response) => {
      console.log(response);
      setGames(response.data);
      const event = new CustomEvent('search', { detail: response.data });
      window.dispatchEvent(event);
    });
  };

  return (
    <div class='searchForm'>
      <form class='d-flex' onSubmit={handleSubmit}>
        <input
          class='form-control me-2'
          type='search'
          placeholder='Search Game'
          aria-label='Search'
          onChange={handleChange}
          //value={enteredTitle}
        />

        <button
          class='btn btn-outline-info'
          type='submit'
          onClick={handleSubmit}
        >
          Search
        </button>
      </form>
    </div>
  );
}

export default Search;
