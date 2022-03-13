import ActionTypes from "../constants/action-types"

const storage=(localStorage.getItem("cartItems"))
const objectStorage=JSON.parse(storage===null?"[]":storage)
export const cartReducer=(state:any={ objectStorage },action:any)=>{
    switch(action.type){
        case ActionTypes.ADD_TO_CART:
            return {
                cartItems: action.payload.cartItems
            }
        case ActionTypes.REMOVE_FROM_CART:
            return {
                cartItems: action.payload.cartItems

            }
        default:
            return state

    }
}