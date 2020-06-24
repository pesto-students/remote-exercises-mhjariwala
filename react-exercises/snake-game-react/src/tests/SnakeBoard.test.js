import React from 'react';
import { render, cleanup } from '@testing-library/react';
import SnakeBoard from '../components/SnakeBoard';
import { GameContextProvider, SnakeGameContext } from '../context/SnakeGameContext';
import { NO_OF_ROWS, NO_OF_COLUMNS, CEIL_HEIGHT, CEIL_WIDTH } from '../utilities/constants';
import { getGridWidth, getGridHeight } from '../utilities/utils';

const { Consumer } = SnakeGameContext

afterEach(cleanup);

describe('Render SnakeBoard', () => {
    it('Render Snake Board.', async () => {
        const { getByTestId } = render(
            <GameContextProvider>
                <Consumer>
                {value => {
                    return <SnakeBoard />
                }}
                </Consumer>
            </GameContextProvider>
        );
        const snakeBoard = getByTestId('board');
        
        expect(snakeBoard).toBeInTheDocument();

        const style = snakeBoard.style;
         
        await new Promise((res) => setTimeout(res, 1000));
        
        expect(style.width).toBe(`${getGridWidth(NO_OF_COLUMNS, CEIL_WIDTH)}px`);
        expect(style.height).toBe(`${getGridHeight(NO_OF_ROWS, CEIL_HEIGHT)}px`);
    });
});