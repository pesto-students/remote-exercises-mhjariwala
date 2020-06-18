import React from 'react';

import '../counter.css';
import useReducer from '../hooks/useReducer';

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    default:
      throw new Error(`${action.type} is not available.`);
  }
}

export default function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  
  return (
    <div className="counter">
      Count: {state.count}
      <button onClick={() => dispatch({type: 'decrement'})}>-</button>
      <button onClick={() => dispatch({type: 'increment'})}>+</button>
    </div>
  );
}