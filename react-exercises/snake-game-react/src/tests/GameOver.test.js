import React from 'react';
import { render, cleanup } from '@testing-library/react';
import GameOver from '../components/GameOver';
import { SnakeGameContext } from '../context/SnakeGameContext';
import { GAME_STATUSES } from '../utilities/constants';

const { GAME_OVER, NOT_STARTED } = GAME_STATUSES
const { Consumer, Provider } = SnakeGameContext

afterEach(cleanup);

describe('Render GameOver view', () => {
    it('Render nothing.', () => {
        const gameState = {
            state: NOT_STARTED,
            snake: {
                tail: []
            }
        };
        const { queryByTestId } = render(
            <Provider value={{ gameState }}>
                <Consumer>
                {value => {
                    return <GameOver />
                }}
                </Consumer>
            </Provider>
        );
        const gameOver = queryByTestId('game-over');
        
        expect(gameOver).toBe(null);
    });

    it('Render GameOver.', async () => {
        const gameState = {
            state: GAME_OVER,
            snake: {
                tail: []
            }
        };
        const { getByTestId } = render(
            <Provider value={{ gameState }}>
                <Consumer>
                {value => {
                    return <GameOver />
                }}
                </Consumer>
            </Provider>
        );
        const gameOver = getByTestId('game-over');
        
        expect(gameOver).toBeInTheDocument();
    });
});