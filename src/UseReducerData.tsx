import { useEffect, useReducer } from 'react'

interface DataState<T extends {}> {
  loading: boolean
  data: T
  error: string
}

interface DataAction<T> {
  type: "SUCCESS" | "FAIL"
  payload: T
}

const initialState: DataState<{}> = {
  loading: true,
  data: {},
  error: ""
}

const dataReducer = <T extends {title?: string}>(state: DataState<T>, action: DataAction<T>): DataState<T> => {
  switch (action.type) {
    case "SUCCESS": 
      return {
        loading: false,
        data: action.payload,
        error: ""
      }

    case "FAIL":
      return {
        loading: false,
        data: action.payload,
        error: "Data can't be fetched"
      }
  }
}

function UseReducerData() {
  const [dataState, dispatch] = useReducer(dataReducer, initialState)

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/1a")
      .then(res => {
        if (res.ok) {
          return res.json()
        } else {
          dispatch({type:"FAIL", payload:{}})
          throw new Error("Oops")
        }
      })
      .then(data => dispatch({type: "SUCCESS", payload: data}))
      .catch((err) => {
        console.log(err)
      })
      
  }, [])
  return (
    <div>
      {dataState.loading ? <p>Loading...</p> : dataState.data.title}
      {dataState.error ? dataState.error: null}
    </div>
  )
}

export default UseReducerData