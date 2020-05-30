import React, { useEffect, useState } from 'react';
import * as styled from './styled';
import { useHistory } from 'react-router-dom';

export default function Repositories() {
  const history = useHistory();
  const [ repositories, setRepositories ] = useState([]);

  useEffect(() => {
    let repositoriesName = localStorage.getItem('repositoriesName');
    if(repositoriesName !== null){
      repositoriesName = JSON.parse(repositoriesName);
      setRepositories(repositoriesName);
      localStorage.clear();
    }else{
      history.push("./");
    }
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
    <styled.LinkHome to="./">Back</styled.LinkHome>
  </styled.Container>
  )
}