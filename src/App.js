import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Menu from './components/menu'
import Login from './pages/login'
import School from './pages/school'
import Student from './pages/student'
import './App.scss'

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Menu />
            <div className="container">
              <Route path="/school">
                <School />
              </Route>
              <Route path="/student">
                <Student />
              </Route>
            </div>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
