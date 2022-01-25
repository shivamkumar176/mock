import productReducer from "./productReducer";
import cartProduct from "./cartProduct";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
    productReducer,cartProduct
})

export default rootReducer;