import { DIRECTIONS_MAPPER } from "./constants";

const { LEFT, RIGHT, TOP, BOTTOM } = DIRECTIONS_MAPPER

export function isNumber(value) {
    return typeof value === 'number' && !Number.isNaN(value);
}

export function createAndGetGridData(rows = [], cols = []) {
    const grid = [];

    if(!isNumber(rows) || !isNumber(cols)){
        return grid;
    }
    
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            grid.push({ row, col })
        }
        
    }

    return grid;
}

function isFoodNewPositionCollapse(foodNewPosition = {}, snake) {
    const { head = {}, tail = [] } = snake || {}
    const { row, col } = foodNewPosition || {}

    if(row === head.row && col === head.col){
        return true;
    }

    if(Array.isArray(tail) && tail.length){
        for (const position of tail) {
            if(row === position.row && col === position.col){
                return true;
            }
        }
    }

    return false;
}

export function getRandomFoodLocation(snake, noOfRows, noOfCols) {
    if(!isNumber(noOfRows) || !isNumber(noOfCols)){
        return;
    }

    const randomRow = Math.floor(Math.random() * noOfCols);
    const randomCol = Math.floor(Math.random() * noOfRows);
    const foodNewPosition = {
        row: randomRow,
        col: randomCol
    };

    if(isFoodNewPositionCollapse(foodNewPosition, snake)){
        return getRandomFoodLocation(snake, noOfRows, noOfCols);
    }

    return {
        row: randomRow,
        col: randomCol
    }
}

export function getGridHeight(noOfRows, ceilHeight) {
    if(!isNumber(noOfRows) || !isNumber(ceilHeight)){
        return 0;
    }

    return noOfRows * ceilHeight;
}

export function getGridWidth(noOfColumns, ceilWidth) {
    if(!isNumber(noOfColumns) || !isNumber(ceilWidth)){
        return 0;
    }

    return noOfColumns * ceilWidth;
}

export function isFood(item, foodPosition) {
    return foodPosition.row === item.row && foodPosition.col === item.col;
}
 
 export function isSnake(item, snake) {
    const { head, tail } = snake || {};
    const isHead = item.row === head.row && item.col === head.col
    
    const isTail = tail.some(({ row, col }) => {
        return item.row === row && item.col === col
    });

    return isHead || isTail
 }

 export function getUpdatedSnakeDirection(snake, direction) {
    const { head, tail } = snake;
    const { row , col } = head;
    const updatedTail = tail;
    const updatedHead = {
        row: row + direction.row,
        col:  col + direction.col
    }

    updatedTail.unshift(head);
    
    const updatedSnakeDetail = {
        ...snake,
        head: updatedHead,
        tail: updatedTail    
    }

    return updatedSnakeDetail;
 }

 export function isSameDirection(newDirection, oldDirection) {
    if(!newDirection || !oldDirection){
        return false;
    }

    return newDirection === oldDirection;
 }

 export function isOppositeDirection(newDirection, oldDirection) {
    if((newDirection === LEFT.value && oldDirection === RIGHT.value) ||
       (newDirection === RIGHT.value && oldDirection === LEFT.value)){
        return true;
    }

    if((newDirection === BOTTOM.value && oldDirection === TOP.value) ||
       (newDirection === TOP.value && oldDirection === BOTTOM.value)){
        return true;
    }

    return false;
 }


export function getInitialSnakeState() {
    return {
        head: { row: 0, col: 0 },
        tail: []
    }
}