import { useState } from 'react';

const dispatcher = {
    reducer: null,
    setState: null,
    state: null,
    dispatch: (...args) => {
        const updatedState = dispatcher.reducer(dispatcher.state, ...args);

        dispatcher.setState(updatedState);
    }, 
    useReducer(...args) {
        const [reducer, initialValue, init] = args;

        if(typeof reducer !== 'function'){
            throw new TypeError('reducer must be function.');
        }
        
        
        const [state, setState] = useState(() => {
            return typeof init === 'function' ? init(initialValue) : initialValue;
        });
        
        dispatcher.reducer = reducer;
        dispatcher.state = state;
        dispatcher.setState = setState;

        return [state, dispatcher.dispatch]
    }
}

export default function useReducer(reducer, initialValue, init) {
    return dispatcher.useReducer(reducer, initialValue, init);
}