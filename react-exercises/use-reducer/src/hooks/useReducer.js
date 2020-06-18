import { useState } from 'react';

function getDispatcher() { 
    const dispatcher = {
        reducer: null,
        setState: null,
        state: null,
        dispatch: (...args) => {
            const updatedState = dispatcher.reducer(dispatcher.state, ...args);
    
            dispatcher.setState(updatedState);
        }
    }

    return dispatcher;
}

export default function useReducer(reducer, initialValue, init) {
    if(typeof reducer !== 'function'){
        throw new TypeError('reducer must be function.');
    } 
    
    const [state, setState] = useState(() => {
        return typeof init === 'function' ? init(initialValue) : initialValue;
    });
    
    const [dispatcher] = useState(() => {
        return getDispatcher();
    });

    dispatcher.reducer = reducer;
    dispatcher.setState = setState;
    dispatcher.state = state;

    return [state, dispatcher.dispatch];
}