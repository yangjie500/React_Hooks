import React, { useReducer } from 'react';

interface CounterState {
  count: number
}

interface UpdateAction {
  type: 'increment' | 'decrement'
  payload: number
}

interface ResetAction {
  type: 'reset'
}

type CounterAction = UpdateAction | ResetAction

const initialState: CounterState = {
  count: 0
  // Can add more state
};

const reducer = (state: CounterState, action: CounterAction): CounterState => {
  switch(action.type) {
    case 'increment':
      return { count: state.count + action.payload };
    case 'decrement':
      return { count: state.count - action.payload };
    case 'reset':
      return { count: initialState.count }
    default: 
      return state
  }
  
}

function App2() {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div className="App">
      <div>Count: {state.count}</div>
      <button onClick={() => dispatch({ type: 'increment', payload: 1})}>Increment</button>
      <button onClick={() => dispatch({ type: 'increment', payload: 5})}>Increment 5</button>
      <button onClick={() => dispatch({ type: 'decrement', payload: 1})}>Decrement</button>
      <button onClick={() => dispatch({ type: 'decrement', payload: 5})}>Decrement 5</button>
      <button onClick={() => dispatch({ type: 'reset'})}>Reset</button>
    </div>
  );
}

export default App2;
