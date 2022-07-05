import axios from 'axios';
import React, { useState, useEffect } from 'react';
import NavBar3 from '../components/Home-Nav';
import '../stylesheets/home.css';

const Home = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/games/list').then((response) => {
      console.log(response);
      setGames(response.data);
    });
    const handler = function (e) {
      setGames(e.detail);
    };
    window.addEventListener('search', handler, false);
    return function cleanup() {
      window.removeEventListener('search', handler, false);
    };
  }, []);

  function getGames() {
    return games.map((game) => (
      <div key={game.GameId} >
        <div class="container">
          <div class='d-flex justify-content-center flex-wrap'>
            <div class='card d-flex position-relative flex-column'>
              <div class='imgContainer'>
                <img src={game.GameThumbnail} alt=''/>
                
              </div>
              <div class="content">
                <br/>
                <h1 class="text-primary">{game.Name}</h1>
                <h3 class="text-info">{game.Description}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    ));
  }

  return (
    <div>
      <NavBar3 />

      <div className='row'>
        <div className='gameList flex-wrap'>
          {games === null ? <div>loading</div> : getGames()}
        </div>
      </div>
    </div>
  );
};

export default Home;
