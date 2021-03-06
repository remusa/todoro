import React, { ComponentType, PropsWithChildren, useEffect, useState } from 'react'
import { AppState } from '~context/AppState'
import { load } from './useFetch'

export const withData = (
  WrappedComponent: ComponentType<PropsWithChildren<{ initialState: AppState }>>,
) => {
  return ({ children }: PropsWithChildren<{}>) => {
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState<Error | undefined>()
    const [initialState, setInitialState] = useState<AppState>({
      lists: [],
      draggedItem: undefined,
    })

    useEffect(() => {
      const fetchInitialState = async () => {
        try {
          const data = await load()

          if (data) {
            setInitialState(data)
          }
        } catch (e) {
          setError(e)
        }

        setIsLoading(false)
      }

      fetchInitialState()
    }, [])

    if (isLoading) {
      return <div>Loading...</div>
    }

    if (error) {
      return <div>{error.message}</div>
    }

    return <WrappedComponent initialState={initialState}>{children}</WrappedComponent>
  }
}
