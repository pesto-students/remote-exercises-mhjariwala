const SECONDS = 1000;
const MINUTES = SECONDS * 60;
const HOURS = MINUTES * 60;
const DAYS = HOURS * 24;
const WEEKS = DAYS * 7;
const MONTHS = DAYS * 30;
const YEARS = MONTHS * 12;

function throwError(message) {
    new Error(message);
}

function isGreater(value1, value2) {
    return value1 > value2;
}

function getTimeString(elapsedTime, timePerUnit, unit) {
    const isGreaterTime = isGreater(elapsedTime, timePerUnit);
    const time = Math.round(elapsedTime / timePerUnit);
    const relativeTime = `${time} ${unit}${isGreaterTime ? 's' : ''} ago`
    
    return relativeTime;
}

function getRelativeTime(elapsedTime) {
    if(isNaN(elapsedTime)){
        return;
    }

    if(elapsedTime < SECONDS){
        return 'just now';
    }
    
    if(elapsedTime < MINUTES){
        return getTimeString(elapsedTime, SECONDS, 'second');
    }
    
    if(elapsedTime < HOURS){
        return getTimeString(elapsedTime, MINUTES, 'minute');
    }
    
    if(elapsedTime < DAYS){
        return getTimeString(elapsedTime, HOURS, 'hour');
    }
    
    if(elapsedTime < WEEKS){
        return getTimeString(elapsedTime, DAYS, 'day');
    }
    
    if(elapsedTime < MONTHS){
        return getTimeString(elapsedTime, WEEKS, 'week');
    }
    
    if(elapsedTime < YEARS){
        return getTimeString(elapsedTime, MONTHS, 'month');
    }

    return getTimeString(elapsedTime, YEARS, 'year');
}

function timeWas(pastTime, currentTime) {
    if(isNaN(pastTime)){
        throwError('Value of pastTime parameter is invalid.');
    }
    
    if(currentTime && isNaN(currentTime)){
        throwError('Value of currentTime parameter is invalid.');
    }

    const now = currentTime || Date.now();
    const differenceInTime = now - pastTime;

    return getRelativeTime(differenceInTime);
}

export { timeWas };
