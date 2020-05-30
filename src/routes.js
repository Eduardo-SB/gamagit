import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Respositories from './Pages/Repositories'
import Home from './Pages/Home'

export default function Routes(){
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/respositories' component={Respositories}/>
      </Switch>
    </BrowserRouter>
  )
}