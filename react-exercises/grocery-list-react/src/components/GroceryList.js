import React, { useContext } from 'react';

import './GroceryList.css';
import GroceryItem from './GroceryItem';
import groceryContext from '../context/GroceryContext';

function GroceryList() {
    const { groceryList } = useContext(groceryContext);
    
    if(!groceryList || !groceryList.length){
        return <h3 className="text-center">No Groceries available.</h3>
    }

    return (
        <div className="grocery-list">
            {
                groceryList.map((item, index) => (
                    <GroceryItem
                        key={index}
                        item={item} /> 
                ))
            }    
        </div>
    );
}

export default GroceryList;