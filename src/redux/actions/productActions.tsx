import { type } from 'os'
import React from 'react'
import ActionTypes from '../constants/action-types'

export const setPizzas=(pizzas:any)=> {
  return {
    type: ActionTypes.SET_PIZZAS,
    payload: pizzas
    }
}



export const SelectedPizza=(pizza:any)=> {
    return {
      type: ActionTypes.SELECTED_PIZZA,
      payload: pizza
    }
}
  
 
  