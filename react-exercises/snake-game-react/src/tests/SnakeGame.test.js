import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import SnakeGame from '../components/SnakeGame';
import { GameContextProvider, SnakeGameContext } from '../context/SnakeGameContext';
import { NO_OF_ROWS, NO_OF_COLUMNS, CEIL_HEIGHT, CEIL_WIDTH } from '../utilities/constants';

const { Consumer } = SnakeGameContext

describe('Render SnakeBoard', () => {
    it('Render Snake Board.', async () => {
        let gameState;
        const { getByTestId } = render(
            <GameContextProvider>
                <Consumer>
                {value => {
                    gameState = value;

                    return <SnakeGame
                            noOfRows={NO_OF_ROWS}
                            noOfColumns={NO_OF_COLUMNS}
                            ceilWidth={CEIL_WIDTH}
                            ceilHeight={CEIL_HEIGHT}
                            />
                }}
                </Consumer>
            </GameContextProvider>
        );

        const snakeGame = getByTestId('snake-game');
        const gameHeader = getByTestId('snake-header');
        let startBtn = getByTestId('start-button');

        expect(snakeGame).toBeInTheDocument();
        expect(gameHeader).toBeInTheDocument();
        expect(startBtn).toBeInTheDocument();

        await fireEvent.click(startBtn);
        startBtn = getByTestId('start-button');
        expect(startBtn.disabled).toBe(true);
    });
});
