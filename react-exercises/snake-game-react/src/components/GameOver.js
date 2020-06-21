import React, { useContext } from 'react';
import { SnakeGameContext } from '../context/SnakeGameContext';
import { GAME_STATUSES } from '../utilities/constants';

const { GAME_OVER } = GAME_STATUSES

function GameOver({ startGame, handleCloseBtnClick }) {
    const { gameState } = useContext(SnakeGameContext);
    const { state, snake } = gameState;
    const { tail } = snake;

    if(state !== GAME_OVER){
        return null;
    }

    function onCloseBtnClick() {
        if(handleCloseBtnClick){
            handleCloseBtnClick();
        }
    }

    return (
        <div data-testid="game-over" className="game-over-indicator">
            <div>
                <h1>Game Over</h1>
                <h3>{`Score: ${tail.length}`}</h3>
                <button
                    className="app-button mr-5"
                    onClick={onCloseBtnClick}>
                    Close
                </button>
                <button
                    className="app-button"
                    onClick={() => {startGame()}}>
                    Restart
                </button>
            </div>

        </div>
    );
}

export default GameOver;