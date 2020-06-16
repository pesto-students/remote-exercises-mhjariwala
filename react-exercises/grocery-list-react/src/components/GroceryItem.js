import React, { useContext } from 'react';

import './GroceryItem.css';
import groceryContext from '../context/GroceryContext';

function GroceryItem(props) {
    const { togglePurchase } = useContext(groceryContext);
    const { item } = props;

    if(!item){
        return null;
    }

    const { name, purchased, qty } = item
    
    return (
        <div
            className={`grocery-item ${purchased ? 'purchased-item' : ''}`}
            onClick={() => { togglePurchase(name) }}>
            <span>{name}</span>
            {qty > 1 && <span>({qty})</span>}
        </div>
    );
}

export default GroceryItem;