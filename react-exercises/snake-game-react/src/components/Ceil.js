import React from 'react';

function Ceil({ isFood, isSnake, width, height }) {
    let className = ''

    if(isFood){
        className = 'food'
    }

    if(isSnake) {
        className = 'snake'
    }

    return (
        <div
            data-testid="ceil"
            data-food={isFood && !isSnake ? 'true' : 'false'}
            data-snake={isSnake ? 'true' : 'false'}
            className={`ceil ${className}`}
            style={{ width, height }}>
        </div>
    )
}

export default Ceil;