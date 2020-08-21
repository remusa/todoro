import React from 'react'
import { BrowserRouter as Router, Route, RouteProps, Switch } from 'react-router-dom'
import Home from '~components/Home'
import Layout from '~components/Layout'
import Home from '~screens/Home'
import PageError from '~screens/PageError'
import Profile from '~screens/Profile'

const AppRoute = (props: RouteProps) => (
  <Route {...props}>
    <Layout>{props.children}</Layout>
  </Route>
)

export function App() {
  return (
    <Router>
      <Switch>
        <AppRoute exact path='/'>
          <Home />
        </AppRoute>

        <AppRoute exact path='/profile'>
          <Profile />
        </AppRoute>

        <AppRoute path='*'>
          <PageError>Page not found.</PageError>
        </AppRoute>
      </Switch>
    </Router>
  )
}
