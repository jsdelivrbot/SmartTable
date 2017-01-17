import React , { Component } from 'react'
import {Route, IndexRoute} from 'react-router'
import App from './components/app/App'
import Profile from './components/restProfile/Profile.js'
import Landing from './components/landing/Landing.js'
export default (
  <Route path='/' component={App}>
  <IndexRoute component={Landing}/>
    <Route path='/profile'component={Profile}/>
  </Route>

)

// <IndexRoute component={MainMenu} />
