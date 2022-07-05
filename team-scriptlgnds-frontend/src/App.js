import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../src/stylesheets/bootstrap.css';
import { Routes, Route } from 'react-router-dom';
import Login from './components/login';
import Signup from './components/signup';
import Home from './pages/home';
import About from './pages/about';
import Profile from './pages/profile';
import SearchResults from './pages/searchresults';
import { Outlet } from 'react-router-dom';
import CurrentReview from './pages/CurrentReview';
import DisplayGame from './components/DisplayGame';
import List from './components/List';

function App() {
  return (
    <div className='auth-wrapper'>
      <div className='auth-inner'>
        <Outlet />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/home' element={<Home />} About />
          <Route path='/about' element={<About />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/searchResults' element={<SearchResults />} />
          <Route path='/login' element={<Login />} />
          <Route path='/sign-up' element={<Signup />} />
          <Route path='/CurrentReview' element={<CurrentReview />} />
          <Route path='/games' element={<List />} />
          <Route path='/games/:search' element={<List />} />
          <Route path='/oneGame/:gameId' element={<DisplayGame />} />
        </Routes>
      </div>
    </div>
  );
}
export default App;
