import React, { createContext, useState } from "react";

const groceryContext = createContext([])
const { Provider } = groceryContext

export const GroceryProvider = (props) => {
    const [groceryList, setGroceryList] = useState([]);

    function addGrocery(grocery) {
        const groceryValue = grocery ? grocery.trim().toLowerCase() : '';
        let isNewGrocery = false;

        if(!groceryValue){
            return;
        }

        const groceryIndex = groceryList.findIndex((item) => {
            const { name } = item;

            return groceryValue === name.toLowerCase();
        });

        isNewGrocery = groceryIndex === -1;
        const updatedGroceryList = [...groceryList];

        if(isNewGrocery){
            const newItem = {
                name: groceryValue,
                qty: 1,
                purchased: false
            };

            updatedGroceryList.push(newItem);
        } else {
            const groceryToUpdate = updatedGroceryList[groceryIndex];

            groceryToUpdate.qty += 1;
        }

        setGroceryList(updatedGroceryList);
    }

    function togglePurchase(groceryName) {
        const groceryIndex = groceryList.findIndex((item) => {
            const { name } = item;

            return groceryName === name.toLowerCase();
        });

        const item = groceryList[groceryIndex];

        if(!item){
            return;
        }

        item.purchased = !item.purchased;
        setGroceryList([...groceryList]);
    }

    function clearAll() {
        setGroceryList([]);
    }

    return (
    <Provider value={{ groceryList, addGrocery, togglePurchase, clearAll }}>
        {props.children}
    </Provider>
    )
}

export default groceryContext;
