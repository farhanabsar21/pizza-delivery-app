import axios from "axios"

export const getAllPizzas = () => async dispatch => {
    dispatch({
        type: "GET_PIZZA_REQUEST"
    })
    try{
        const response = await axios.get("/api/pizzas/allpizzas")
        dispatch({
            type: "GET_PIZZA_SUCCESS",
            payload: await response.data
        })
    }catch(err){
        dispatch({
            type: "GET_PIZZA_FAILED",
            payload: err
        })
    }
}