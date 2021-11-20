import { applyMiddleware, createStore } from "redux";
import { combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { cartReducer } from "./Reducers/cartReducers";
import { getAllPizzaReducers } from "./Reducers/pizzaReducers";
import { loginUserReducer, registerUserReducer } from "./Reducers/userReducer";

const finalReducer = combineReducers({
    getAllPizzaReducers : getAllPizzaReducers,
    cartReducer: cartReducer,
    registerUserReducer : registerUserReducer,
    loginUserReducer: loginUserReducer
})

const cartItems = localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : []

const currentUser = localStorage.getItem("currentUser") ? JSON.parse(localStorage.getItem("currentUser")) : null 

const initialStore = {
    cartReducer : {
        cartItems : cartItems
    },
    loginUserReducer : {
        currentUser: currentUser
    }
}

const composeEnhancers = composeWithDevTools
const store = createStore(finalReducer, initialStore, composeEnhancers(applyMiddleware(thunk)))
export default store

