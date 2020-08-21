import React from 'react'
import { BrowserRouter as Router, Route, RouteProps, Switch } from 'react-router-dom'
import AddNewItem from '~components/AddNewItem'
import Card from '~components/Card'
import Column from '~components/Column'
import Layout from '~components/Layout'
import Home from '~screens/Home'
import PageError from '~screens/PageError'
import Profile from '~screens/Profile'

export default () => {
  return (
    <Layout>
      <Column text='To Do'>
        <Card text='Generate app scaffold' />
      </Column>

      <Column text='In Progress'>
        <Card text='Learn TypeScript' />
      </Column>

      <Column text='Done'>
        <Card text='Begin to use static typing' />
      </Column>

      <AddNewItem toggleButtonText='+ Add another list' onAdd={console.log} />
    </Layout>
  )
}

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
