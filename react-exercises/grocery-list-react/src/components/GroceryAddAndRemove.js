import React, { useState, useContext } from 'react';
import groceryContext from '../context/GroceryContext';

function GroceryAddAndRemove() {
    const { addGrocery, clearAll, groceryList } = useContext(groceryContext);
    const [inputValue, setInputValue] = useState('');
    
    function onValueChange(e) {
        setInputValue(e.target.value);
    }

    function onAddBtnClick() {
        const trimmedValue = inputValue ? inputValue.trim() : '';

        if(!trimmedValue){
            return;
        }

        addGrocery(trimmedValue);
        setInputValue('');
    }

    function onKeyDown(e) {
        const code = e.keyCode || e.which;

        if(code === 13 || e.key === 'Enter'){
            onAddBtnClick();
        }
    }
    
    return (
        <div className="d-flex margin-bottom-10">
            <input
                value={inputValue}
                className="d-input flex-grow-1 margin-5"
                onKeyDown={onKeyDown}
                onChange={onValueChange} />

            <button
                className="d-button margin-5"
                onClick={onAddBtnClick}
                disabled={!inputValue || !inputValue.trim()}>
                Add
            </button>

            <button
                className="d-button margin-5"
                onClick={clearAll}
                disabled={!groceryList || !groceryList.length}>
                Clear All
            </button>
        </div>
    );
}

export default GroceryAddAndRemove;