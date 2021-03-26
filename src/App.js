import React from 'react'
import './App.css'
import { Route } from 'react-router-dom'
import Home from './components/index'
import Resume from './components/Resume'
import Portfolio from './components/Portfolio'
import Contacts from './components/Contacts'
import { CssBaseline } from '@material-ui/core'

function App() {
  return (
    <>
      <CssBaseline />
      <Route exact path={'/'} component={Home} />
      <Route path={'/resume'} component={Resume} />
      <Route path={'/portfolio_path'} component={Portfolio} />
      <Route path={'/contact'} component={Contacts} />
    </>
  )
}

export default App
