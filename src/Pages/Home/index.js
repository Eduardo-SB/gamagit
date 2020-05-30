import React, { useState } from 'react';
import * as styled from './styled';
import Axios from 'axios';
import { useHistory } from 'react-router-dom';

export default function Home() {
  const history = useHistory();
  const [user, setUser] = useState('');

  function handleSearch(){
    Axios.get(`https://api.github.com/users/${user}/repos`).then(res =>{
      const repositories = res.data;
      const repositoriesName = [];

      repositories.map((repo) => {
        return repositoriesName.push(repo.name);
      });

      localStorage.setItem('repositoriesName', JSON.stringify(repositoriesName));
      history.push('/respositories')
    }).catch(error => {
      console.log('repo doenst existe!');
    });
  }

  return (
  <styled.Container>
    <styled.Input className="userInput" placeholder="User" value={user} onChange={e => setUser(e.target.value)} />
    <styled.Button type="button" onClick={handleSearch}>Search</styled.Button>
  </styled.Container>
  )
}