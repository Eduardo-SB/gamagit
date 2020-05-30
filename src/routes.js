import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Repositores from './Repositories';
import Home from './Home'

export default function Routes(){
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/respositories' component={Repositores}/>
      </Switch>
    </BrowserRouter>
  )
}