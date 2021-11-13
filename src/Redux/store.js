import { applyMiddleware, createStore } from "redux";
import { combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { cartReducer } from "./Reducers/cartReducers";
import { getAllPizzaReducers } from "./Reducers/pizzaReducers";

const finalReducer = combineReducers({
    getAllPizzaReducers : getAllPizzaReducers,
    cartReducer: cartReducer
})

const cartItems = localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : []

const initialStore = {
    cartReducer : {
        cartItems : cartItems
    }
}

const composeEnhancers = composeWithDevTools
const store = createStore(finalReducer, initialStore, composeEnhancers(applyMiddleware(thunk)))
export default store

