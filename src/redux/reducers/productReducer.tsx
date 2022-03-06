import React from 'react'
import ActionTypes from '../constants/action-types'

const initialState={
    pizzas:[
        {
            id:1,
            title:'Sample Pizza',
            category:'veg',
        },
    ]
}

const productReducer=(state:any = initialState,{type,payload}:any)=> {
  switch(type)
  {
        case ActionTypes.SET_PIZZAS:
            return state
        default:
            return state


  }
}
 
export default productReducer
