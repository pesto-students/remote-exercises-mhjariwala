import React from 'react';
import './App.css';
import useKeyPressed from './hooks/useKeyPress';

function App({target}) {
  const keyPressed = useKeyPressed(target);

  if(!target){
    return null
  }
  
  return (
    <div className="App">
      <div>
        {
          keyPressed ? (
          <div data-testid="pressed">{target} key pressed</div>
          ) : (
          <div data-testid="not-pressed">{target} key not pressed</div>
          )
        }
      </div>
    </div>
  );
}

export default App;
