import { React, useState } from 'react';
import NavBar3 from '../components/Home-Nav';
import List from '../components/List';
import Search from '../components/search';
import NavBar1 from '../components/Login-Signup-Nav';

function SearchResults() {
  const [inputText, setInputText] = useState('');
  let inputHandler = (e) => {
    //convert input text to lower case
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };

  return (
    <div>
      <div>
        <List />
      </div>
    </div>
  );
}

export default SearchResults;
