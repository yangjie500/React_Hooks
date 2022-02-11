// useReducer is for local state management
// useReducer + useContext can be used for sharing state management between 
// components (Global State)

import { createContext, useReducer } from "react"
import ComponentA from "./ComponentA"
import ComponentB from "./ComponentB"
import ComponentC from "./ComponentC"

interface CounterAction {
  type: 'INCREMENT' | 'DECREMENT'
  payload?: number
}

interface CounterState {
  count: number
}

const initialCount: CounterState = {
  count: 0
}

function CountReducer(state: CounterState, action: CounterAction): CounterState {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 }
    case 'DECREMENT':
      return { count: state.count - 1 }
    default:
      return state
  }
}

interface CountContextValue {
  count: CounterState
  dispatch: React.Dispatch<CounterAction>
}

export const countContext = createContext<CountContextValue>({} as CountContextValue)

function ReducerAndContext () {

  const [count, dispatch] = useReducer(CountReducer, initialCount)

  return (
    <countContext.Provider value={{count, dispatch}}>
      <div>
        <p>Main Count: {count.count}</p>
        <ComponentA />
        <ComponentB />
        <ComponentC />
      </div>
    </countContext.Provider>
  )
}

export default ReducerAndContext