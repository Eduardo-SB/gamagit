import React, { useState } from 'react';
import * as styled from './styled';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

export default function Content() {
  const history = useHistory();
  const [user, setUser] = useState('');
  const [error, setError] = useState(false);

  function handleSearch(){
    axios.get(`https://api.github.com/users/${user}/repos`)
    .then(res =>{
      const repositories = res.data;
      const repositoriesName = [];

      repositories.map((repo) => {
        return repositoriesName.push(repo.name);
      });

      localStorage.setItem('repositoriesName', JSON.stringify(repositoriesName));
      setError(false);
      history.push('/respositories');
    })
    .catch(error => {
      setError(true);
    });
  }

  return (
  <styled.HomeContainer>
    <styled.Content>
      <styled.Input className="userInput" placeholder="User" value={user} onChange={e => setUser(e.target.value)} />
      <styled.Button type="button" onClick={handleSearch}>Search</styled.Button>
    </styled.Content>
    { error ? <styled.ErrrMsg>User not found!</styled.ErrrMsg> : '' } 
  </styled.HomeContainer>
  )
}