import {combineReducers} from "redux";
import {userReducer} from "./userReducer";
import {productsReducer} from "./productsReducer";
import {basketReducer} from "./basketReducer";
import {orderReducer} from "./orderReducer";

export const rootReducer = combineReducers({
    user: userReducer,
    products: productsReducer,
    basket: basketReducer,
    orders: orderReducer,
})

export type RootState = ReturnType<typeof rootReducer>