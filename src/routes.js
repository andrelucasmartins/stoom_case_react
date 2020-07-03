import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Main from './pages/main'
import Mass from './pages/mass'
import Size from './pages/size'
import Filling from './pages/filling'


const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Main}></Route>
      <Route path='/massa' component={Mass}></Route>
      <Route path='/tamanho' component={Size}></Route>
      <Route path='/recheio' component={Filling}></Route>
    </Switch>
  </BrowserRouter>
)

export default Router