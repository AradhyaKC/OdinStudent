import React, { useState } from "react";

export const ShoppingListContext = React.createContext()

export function Item(name='ItemName', price=100){
    return {
        name, price, isAvailable:true
    }
}

export function ShoppingList(props){
    const [ItemList,setItemList] = useState(()=>{
        var ItemArray = [];
        for(let i =0; i<20;i++) ItemArray.push(new Item(`item name ${i}`));
        return ItemArray;
    });
    const [cart,setCart] =useState([]);

    const AddToCart=async (itemId)=>{
        console.assert(ItemList[itemId].isAvailable);
        await setCart((prevCart=> {
            prevCart.push(itemId);
            return prevCart;
        }));
        console.log("the cart is ");
        console.log(cart);
        setItemList(prevItemList=>{
            prevItemList[itemId].isAvailable=false;
            return prevItemList;
        });
    }

    const ShoppinListApi={cart,ItemList,AddToCart};

    return (
        <ShoppingListContext.Provider value={ShoppinListApi}>
            {props.children}
        </ShoppingListContext.Provider>
    );
}