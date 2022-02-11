import React, { useReducer } from "react"

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



function UseMultReducer () {

  const [countOne, dispatchOne] = useReducer(CountReducer, initialCount)
  const [countTwo, dispatchTwo] = useReducer(CountReducer, initialCount)

  return (
    <div>
      <div>
        <h1>Count One - {countOne.count}</h1>
        <button onClick={() => dispatchOne({type: "INCREMENT"})}>Increment</button>
        <button onClick={() => dispatchOne({type: "DECREMENT"})}>Decrement</button>
      </div>
      <div>
        <h1>Count Two - {countTwo.count}</h1>
        <button onClick={() => dispatchTwo({type: "INCREMENT"})}>Increment</button>
        <button onClick={() => dispatchTwo({type: "DECREMENT"})}>Decrement</button>
      </div>
    </div>
  )
}

export default UseMultReducer
