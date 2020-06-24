import React, { useContext, useEffect } from 'react';
import Ceil from './Ceil';
import { SnakeGameContext } from '../context/SnakeGameContext';
import { GAME_STATUSES, DIRECTIONS_MAPPER } from '../utilities/constants';
import { isFood, isSnake } from '../utilities/utils';

const { STARTED } = GAME_STATUSES
const { LEFT, RIGHT, TOP, BOTTOM } = DIRECTIONS_MAPPER

function SnakeBoard(props) {
    const { gameState, updateDirection } = useContext(SnakeGameContext);
    const { grid, foodPosition, snake, gridHeight, gridWidth } = gameState
    const { ceilHeight, ceilWidth, state } = gameState
    
    useEffect(() => {
        window.addEventListener('keyup', handleKeyPress);

        return () => {
            window.removeEventListener('keyup', handleKeyPress);
        }
        //eslint-disable-next-line
    }, [gameState])

    function handleKeyPress(e) {
        if(state !== STARTED){
            return;
        }

        const key = e.keyCode || e.which;
        let direction;

        if(key === 37){ // left arrow
            direction = LEFT;
        } else if (key === 38){ // top arrow
            direction = TOP;
        } else if (key === 39){ // right arrow
            direction = RIGHT;
        } else if (key === 40){ // bottom arrow
            direction = BOTTOM;
        }

        if(direction){
            updateDirection(direction);
        }
    }

    return (
            <div
                className="board"
                data-testid="board"
                style={{ width: gridWidth, height: gridHeight }}>
                {
                    grid.map((item) => {
                        return (
                            <Ceil
                                key={`${item.row}_${item.col}`}
                                isFood={isFood(item, foodPosition)}
                                isSnake={isSnake(item, snake)}
                                width={ceilWidth}
                                height={ceilHeight}
                                {...item}  />
                        )
                    })
                }
            </div>
    );
}

export default SnakeBoard;