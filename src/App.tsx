import React from 'react'
import { BrowserRouter as Router, Route, RouteProps, Switch } from 'react-router-dom'
import AddNewItem from '~components/AddNewItem'
import Column from '~components/Column'
import Layout from '~components/Layout'
import { useAppState } from '~context/AppState'
import Home from '~screens/Home'
import PageError from '~screens/PageError'
import Profile from '~screens/Profile'

interface State {
  count: number
}

type Action =
  | {
      type: 'INCREMENT'
    }
  | {
      type: 'DECREMENT'
    }

const counterReducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 }
    case 'DECREMENT':
      return { count: state.count - 1 }
    default:
      throw new Error()
  }
}

export default () => {
  // const [state, dispatch] = useReducer(counterReducer, { count: 0 })
  const { state } = useAppState()

  return (
    <Layout>
      {state.lists.map((list, i) => (
        <Column key={list.id} text={list.text} index={i} />
      ))}

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
