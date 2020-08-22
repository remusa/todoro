import React from 'react'
import { BrowserRouter as Router, Route, RouteProps, Switch } from 'react-router-dom'
import AddNewItem from '~components/AddNewItem'
import Column from '~components/Column'
import Layout from '~components/Layout'
import { CustomDragLayer } from '~components/shared/CustomDragLayer'
import { useAppState } from '~context/AppState'
import Home from '~screens/Home'
import PageError from '~screens/PageError'
import Profile from '~screens/Profile'

export default () => {
  const { state, dispatch } = useAppState()

  return (
    <Layout>
      <CustomDragLayer />

      {state.lists.map((list, i) => (
        <Column id={list.id} text={list.text} key={list.id} index={i} />
      ))}

      <AddNewItem
        toggleButtonText='+ Add another list'
        onAdd={text => dispatch({ type: 'ADD_LIST', payload: text })}
      />
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
