import { useContext, useState } from "react";
import { ShoppingListContext } from "./ShoppingItemsContext";

function Profile(props){
    const[state,setState] = useState(()=>{ 
        const {number}=props;
        return number;
    });
    const ShoppingCartApi = useContext(ShoppingListContext);
    console.log(ShoppingCartApi.cart);
    return (
        <div>
            <div> The items added to the cart are </div>
            <div>
                {
                    ShoppingCartApi.cart.map(element=>{
                    return <h1> {element}</h1>
                    })
                }
            </div>
        </div>
    );
}
export default Profile;