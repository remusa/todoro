import { AppState } from '~context/AppState'

const ENDPOINT = 'http://localhost:8000/api/v1'

interface FetchProps {
  method: 'POST' | 'GET'
  payload?: AppState | any
}

export async function useFetch<T>({ method, payload }: FetchProps) {
  const response = fetch(`${ENDPOINT}/`, {
    method,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then(res => {
      const json = res.json() as Promise<T>
      return json
    })
    .catch(e => console.error(`Error: ${e.message}`))

  return response
}

export async function save(payload: AppState) {
  console.log(`SAVING: ${Object.values(payload)}`)
  return

  return await fetch(`${ENDPOINT}/save`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then(res => {
      const json = res.json()
      return json
    })
    .catch(e => console.error(`Error: ${e.message}`))
}

export async function load() {
  const initialState = {
    lists: [
      {
        id: '0',
        text: 'To Do',
        tasks: [{ id: 'c0', text: 'Generate app scaffold' }],
      },
      {
        id: '1',
        text: 'In Progress',
        tasks: [{ id: 'c2', text: 'Learn Typescript' }],
      },
      {
        id: '2',
        text: 'Done',
        tasks: [{ id: 'c3', text: 'Begin to use static typing' }],
      },
    ],
    draggedItem: undefined,
  }

  console.log(`LOADING: ${Object.values(initialState)}`)
  return initialState

  return await fetch(`${ENDPOINT}/load`)
    .then(res => {
      const json = res.json() as Promise<AppState>
      return json
    })
    .catch(e => console.error(`Error: ${e.message}`))
}
