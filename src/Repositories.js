import React, { useState } from 'react';
import Axios from 'axios';

export default function Repositories() {
  const [user, setUser] = useState('');

  function handleSearch(){
    Axios.get(`https://api.github.com/users/${user}/repos`).then(res => console.log(res.data))
  }
  return (
  <>
    <h1>{ user }</h1>
    <input className="userInput" placeholder="User" value={user} onChange={e => setUser(e.target.value)} />
    <button type="button" onClick={handleSearch}>Search</button>
  </>
  )
}