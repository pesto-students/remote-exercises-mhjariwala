import React from 'react';

import './App.css';
import SnakeGame from './components/SnakeGame';
import { GameContextProvider } from './context/SnakeGameContext';
import { NO_OF_COLUMNS, NO_OF_ROWS, CEIL_HEIGHT, CEIL_WIDTH } from './utilities/constants';

function App() {
  return (
    <div className="App" data-testid="app">
      <GameContextProvider>
        <SnakeGame
          noOfRows={NO_OF_ROWS}
          noOfColumns={NO_OF_COLUMNS}
          ceilWidth={CEIL_WIDTH}
          ceilHeight={CEIL_HEIGHT} />
      </GameContextProvider>
    </div>
  );
}

export default App;
