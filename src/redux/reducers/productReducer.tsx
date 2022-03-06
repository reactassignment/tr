import React from 'react'
import ActionTypes from '../constants/action-types'

const initialState={
    pizzas:[]
}

const productReducer=(state:any = initialState,{type,payload}:any)=> {
  switch(type)
  {
        case ActionTypes.SET_PIZZAS:
            return {...state, pizzas:payload}
        default:
            return state


  }
}
 
export default productReducer
