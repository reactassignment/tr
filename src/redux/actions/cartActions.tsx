import ActionTypes from '../constants/action-types'

export const addToCart=(pizzas:any,add_pizza:any,quantity:any)=>(dispatch:any)=> {
    const cartItems=pizzas.slice()

    let already_exists=false
    
    cartItems.forEach((x:any)=>{
        if(x.id===add_pizza.id){
            already_exists=true;
            x.count+=quantity;
        }
    })
    
    if(!already_exists){
        cartItems.push({
            ...pizzas,
            count:quantity,
        })
    }
    
    dispatch({
        type:ActionTypes.ADD_TO_CART,
        payload: {cartItems},
    })
    
    localStorage.setItem("cartItems",JSON.stringify(cartItems))
}


export const removeFromCart=(pizzas:any,remove_pizza:any)=>(dispatch:any)=> {
    const cartItems=pizzas.slice().filter(
        (x:any) =>x.id!==remove_pizza.id
    )
    
    dispatch({
        type:ActionTypes.REMOVE_FROM_CART,
        payload: {cartItems},
    })
    localStorage.setItem("cartItems",JSON.stringify(cartItems))
}