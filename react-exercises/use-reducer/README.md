# Instructions

Using React Hooks, create a clone of [`React.useReducer`](https://reactjs.org/docs/hooks-reference.html#usereducer).

## Inputs
- A [reducer](https://redux.js.org/basics/reducers) function and an initial state.

## Output
- The new state
- A function to dispatch actions

## Example
```js
const initialState = {count: 0};

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    default:
      throw new Error();
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({type: 'decrement'})}>-</button>
      <button onClick={() => dispatch({type: 'increment'})}>+</button>
    </>
  );
}
```

## Restrictions
- Don't use `React.useReducer`.