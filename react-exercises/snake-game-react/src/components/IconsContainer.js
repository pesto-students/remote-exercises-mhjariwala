import React, { useContext } from 'react';

import { SnakeGameContext } from '../context/SnakeGameContext';
import { DIRECTIONS_MAPPER } from '../utilities/constants';

function IconsContainer() {
    const { updateDirection } = useContext(SnakeGameContext);
    
    function handleBtnClick(direction) {
        updateDirection(direction);
    }

    return (
        <div className="icons-container">
            <button
                title="UP"
                className="icon app-button"
                onClick={() => { handleBtnClick(DIRECTIONS_MAPPER.TOP) }}>
                &#129045;
            </button>
            <button
                title="RIGHT"
                className="icon app-button"
                onClick={() => { handleBtnClick(DIRECTIONS_MAPPER.RIGHT) }}>
                &#129046;
            </button>
            <button
                title="DOWN"
                className="icon app-button"
                onClick={() => { handleBtnClick(DIRECTIONS_MAPPER.BOTTOM) }}>
                &#129047;
            </button>
            <button
                title="LEFT"
                className="icon app-button"
                onClick={() => { handleBtnClick(DIRECTIONS_MAPPER.LEFT) }}>
                &#129044;
            </button>
        </div>
    );
}

export default IconsContainer;