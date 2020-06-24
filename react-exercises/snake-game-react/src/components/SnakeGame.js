import React, { useEffect, useContext, useState } from 'react';
import PropTypes from 'prop-types';

import SnakeBoard from './SnakeBoard';
import { createAndGetGridData, getGridHeight, getGridWidth, getRandomFoodLocation, getUpdatedSnakeDirection } from '../utilities/utils';
import { SnakeGameContext } from '../context/SnakeGameContext';
import { GAME_STATUSES, DIRECTIONS_MAPPER, SNAKE_SPEED, NO_OF_COLUMNS, CEIL_HEIGHT, CEIL_WIDTH, NO_OF_ROWS } from '../utilities/constants';
import GameOver from './GameOver';
import IconsContainer from './IconsContainer';

const { STARTED, GAME_OVER, NOT_STARTED } = GAME_STATUSES

function SnakeGame(props) {
    const { noOfRows, noOfColumns, ceilWidth, ceilHeight } = props;
    const { updateGameData, startGame, gameState, isCollide, isSnakeGotFood } = useContext(SnakeGameContext);
    const { snake, state,  DIRECTION, foodPosition } = gameState;
    const tail = snake.tail || [];
    const  [intervalJobNo, setIntervalJobNo] = useState();

    useEffect(() => {
        const rows = noOfRows|| NO_OF_ROWS;
        const cols = noOfColumns|| NO_OF_COLUMNS;
        const updatedCeilHeight = ceilHeight|| CEIL_HEIGHT;
        const updatedCeilWidth = ceilHeight|| CEIL_WIDTH;
        const grid = createAndGetGridData(rows, cols);
        const gridHeight = getGridHeight(rows, updatedCeilHeight);
        const gridWidth = getGridWidth(cols, updatedCeilWidth);
        const gridObj = {
            grid,
            gridHeight,
            gridWidth,
            noOfRows: rows,
            noOfColumns: cols,
            ceilWidth: updatedCeilWidth,
            ceilHeight: updatedCeilHeight
        }

        updateGameData(gridObj);
        
        //eslint-disable-next-line
    }, [noOfRows, noOfColumns, ceilWidth, ceilHeight])

    useEffect(() => {
        if(state !== STARTED){
            clearInterval(intervalJobNo);
            return;
        }

        const jobNo = setInterval(moveSnake, SNAKE_SPEED);
        setIntervalJobNo(jobNo);
        
        return () => {
            clearInterval(jobNo);
        }

        //eslint-disable-next-line
    }, [gameState])

    function moveSnake() {
        let updatedDirection = DIRECTION;
        const directionDetails = DIRECTIONS_MAPPER[updatedDirection];
    
        if(!snake || !directionDetails || state !== STARTED){
            return;
        }

        const updatedSnakeDetails = getUpdatedSnakeDirection(snake, directionDetails);
        const isSnakeCollide = isCollide(updatedSnakeDetails);
        const snakeGotFood = isSnakeGotFood(updatedSnakeDetails);
        const updatedState = isSnakeCollide ?  GAME_OVER : state;
        const updatedFoodPosition = snakeGotFood ? getRandomFoodLocation(updatedSnakeDetails, noOfRows, noOfColumns) : foodPosition;

        if(!snakeGotFood){
            updatedSnakeDetails.tail.pop();
        }

        const gameDetails = {
            snake: updatedSnakeDetails,
            state: updatedState,
            foodPosition: updatedFoodPosition,
            direction: updatedDirection
        }

        updateGameData(gameDetails);
    }

    function onStartBtnClick() {
        clearInterval(intervalJobNo);
        startGame();
    }

    function handleCloseBtnClick() {
        clearInterval(intervalJobNo);
        updateGameData({ state: NOT_STARTED });
    }

    function handleRestartBtnClick() {
        onStartBtnClick();
    }

    return (
        <div className="snake-game" data-testid="snake-game">
            <GameOver
                startGame={handleRestartBtnClick}
                handleCloseBtnClick={handleCloseBtnClick} />
            <div className="game-header" data-testid="snake-header">
                <h2>
                    Snake Game
                </h2>

                <div className="game-score">
                    <h4>
                        {`Score: ${tail.length}`} 
                    </h4>
                </div>

                <div>
                    <button
                        data-testid="start-button"
                        className="app-button"
                        onClick={onStartBtnClick}
                        disabled={state === STARTED}>
                        Start Game
                    </button>
                </div>
            </div>
            <div className="game-main-content">
                <SnakeBoard />
                <IconsContainer />
            </div>
        </div>
    );
}

SnakeGame.propTypes = {
    noOfRows: PropTypes.number.isRequired,
    noOfColumns: PropTypes.number.isRequired,
    ceilHeight: PropTypes.number.isRequired,
    ceilWidth: PropTypes.number.isRequired,
}

export default SnakeGame;