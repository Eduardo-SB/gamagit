import React, { useState } from 'react';

function App(props) {
  const [user, setUser] = useState('');

  function handleSearch(){
    // console.log('etet')
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
