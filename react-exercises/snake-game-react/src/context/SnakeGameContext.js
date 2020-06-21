import React, { createContext, useState } from 'react';
import { GAME_STATUSES, DIRECTIONS_MAPPER, NO_OF_ROWS, NO_OF_COLUMNS, CEIL_WIDTH, CEIL_HEIGHT } from '../utilities/constants';
import { getRandomFoodLocation, getInitialSnakeState, getGridWidth, getGridHeight } from '../utilities/utils';

const { NOT_START, STARTED } = GAME_STATUSES
const SnakeGameContext = createContext();
const { Provider, Consumer } = SnakeGameContext

const { BOTTOM } = DIRECTIONS_MAPPER

function getGameInitialState() {
    return {
        state: NOT_START,
        grid: [],
        gridWidth: getGridWidth(NO_OF_COLUMNS, CEIL_WIDTH),
        gridHeight: getGridHeight(NO_OF_ROWS, CEIL_HEIGHT),
        ceilWidth: CEIL_WIDTH,
        ceilHeight: CEIL_HEIGHT,
        DIRECTION: BOTTOM.value, 
        noOfRows: NO_OF_ROWS,
        noOfColumns: NO_OF_COLUMNS,
        foodPosition: {},
        snake: getInitialSnakeState()
    }
}

const GameContextProvider = (props) => {
    const [gameState, setGameState] = useState(() => getGameInitialState());

    function updateGameData(data = {}) {
        setGameState((prevState) => {
            return {  
                ...prevState,
                ...data
            }
        })
    }

    function startGame() {
        const initialSnakeState = getInitialSnakeState();
        const foodPosition = getRandomFoodLocation(initialSnakeState, gameState.noOfRows, gameState.noOfColumns);

        setGameState((prevState) => ({
            ...prevState,
            state: STARTED,
            score: 0,
            DIRECTION: BOTTOM.value,
            foodPosition,
            snake: initialSnakeState
        }))
    }

    function isCollide(updatedSnakeDetail) {
        const { noOfColumns, noOfRows } = gameState;
        const { head, tail = [] } = updatedSnakeDetail || {};
        const { row, col} = head || {};
        const headAvailInTail = tail.find(({ row, col }) => head.row === row && head.col === col)
    
        return row < 0 || row >= noOfRows || col < 0 || col >= noOfColumns || headAvailInTail;
    }

    function isSnakeGotFood(updatedSnakeDetail) {
        const { foodPosition } = gameState;
        const { head } = updatedSnakeDetail || {};
        const { row, col} = head || {};
        const { row: foodRow, col: foodCol } = foodPosition || {};
        
        return row === foodRow && col === foodCol;
    }

    const value = {
        gameState,
        updateGameData,
        startGame,
        isCollide,
        isSnakeGotFood
    }

    return (
    <Provider value={value}>
        {props.children}
    </Provider>)
}

export { GameContextProvider, SnakeGameContext, Consumer }