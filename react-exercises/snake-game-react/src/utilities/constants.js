export const SNAKE_SPEED = 200;

export const DIRECTIONS_MAPPER = {
    LEFT: { row: 0, col: -1, value: 'LEFT' },
    RIGHT: { row: 0, col: 1, value: 'RIGHT' },
    BOTTOM: { row: 1, col: 0, value: 'BOTTOM' },
    TOP: { row: -1, col: 0, value: 'TOP' }
}

export const GAME_STATUSES = {
    NOT_START: 'NOT_START',
    STARTED: 'STARTED',
    GAME_OVER:'GAME_OVER'
}

export const NO_OF_ROWS = 20;
export const NO_OF_COLUMNS = 20;
export const CEIL_WIDTH = 10;
export const CEIL_HEIGHT = 10;