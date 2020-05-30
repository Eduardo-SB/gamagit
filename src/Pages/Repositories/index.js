import React, { useEffect, useState } from 'react';
import * as styled from './styled';

export default function Repositories() {
  const [ repositories, setRepositories ] = useState([]);

  useEffect(() => {
    let repositoriesName = localStorage.getItem('repositoriesName');
    repositoriesName = JSON.parse(repositoriesName);
    setRepositories(repositoriesName);
    // localStorage.clear();
  },[]);

  return (
  <styled.Container>
    <styled.Title>Repositories</styled.Title>
    <styled.List>
      { repositories.map( repo => {
          return (
          <styled.ListItem key={repo}> Repo: { repo }</styled.ListItem>
          )
        }) }
    </styled.List>
  </styled.Container>
  )

}