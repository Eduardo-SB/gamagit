import React, { useState } from 'react';
import axios from 'axios';

function App(props) {
  const [user, setUser] = useState('');

  function handleSearch(){
    axios.get(`https://api.github.com/users/${user}/repos`).then(res => console.log(res.data))
  }

  return (
    <>
      <h1>{ user }</h1>
      <input className="userInput" placeholder="User" value={user} onChange={e => setUser(e.target.value)} />
      <button type="button" onClick={handleSearch}>Search</button>
    </>
  );
}

export default App;
