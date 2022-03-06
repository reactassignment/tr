import React from 'react'
import { combineReducers } from 'redux'
import productReducer from './productReducer'

const reducers=combineReducers( {
  allPizzas:productReducer,
})

export default reducers