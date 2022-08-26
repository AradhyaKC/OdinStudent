import {Routes,BrowserRouter,Route} from "react-router-dom";
import App from "./App";
import Profile from "./Profile";
import { ShoppingList } from "./ShoppingItemsContext";

function RouteSwitch(props){
    return(
        <BrowserRouter>
            <ShoppingList>
                <Routes>
                    <Route path="/" element={<App/>}/>
                    <Route path="/Profile" element={<Profile number='7'/>}/>
                </Routes>
            </ShoppingList>
        </BrowserRouter>
    );
}


export default RouteSwitch;