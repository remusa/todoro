import * as React from 'react'
import { BrowserRouter as Router, Route, RouteProps, Switch } from 'react-router-dom'
import Home from '~components/Home'
import Layout from '~components/Layout'
import PageError from '~components/PageError'
import Profile from '~components/Profile'

const AppRoute = (props: RouteProps) => (
  <Route {...props}>
    <Layout>{props.children}</Layout>
  </Route>
)

export default () => {
  return (
    <Router>
      <Switch>
        <AppRoute exact path='/'>
          <Home />
        </AppRoute>

        <AppRoute exact path='/profile'>
          <Profile />
        </AppRoute>

        <Route path='*'>
          <PageError>Page not found.</PageError>
        </Route>
      </Switch>
    </Router>
  )
}
