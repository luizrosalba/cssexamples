import React from 'react'

import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'


import Inicio from './Inicio'
import Fontes from './Fontes'
import Anima from './Anima'
import Back from './back'
import propri from './propri'
import Header from './header'

function Routes() {
  return (
    <BrowserRouter>
    <Header />
    <div >
      <Switch>
          <Route path="/" exact={true} component={Inicio} /> 
          <Route path="/Fontes" component={Fontes} /> 
          <Route path="/Anima" component={Anima}/>
          <Route path="/Back" component={Back}/> 
          <Route path="/propri" component={propri}/> 
          <Redirect from='*' to='/' />
      </Switch>
    </div>
  </BrowserRouter>
 
  )
}


export default Routes
