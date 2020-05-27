function sortBy(array, field){
    if(!Array.isArray(array)){
        return []
    }

    array.sort((a, b) => {
        const aFieldValue = a[field];
        const bFieldValue = b[field];

        if(aFieldValue > bFieldValue){
            return 1;
        } else if (aFieldValue < bFieldValue){
            return -1;
        }

        return 0;
    });

    return array
}

const animalSort = animals => {
    if(!Array.isArray(animals)){
        return null;
    }

    if(!animals.length){
        return [];
    }

    sortBy(animals, 'name');
    sortBy(animals, 'numberOfLegs');
    
    return animals;
};

export { animalSort };
