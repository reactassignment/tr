import React from 'react'
import ProductListing from '../ProductListing'

const Main=(props:any)=> {
  //console.log(props)
  //console.log(props.cartItems,props.cartItems.length)

  return (
    <>
      <div style={{minHeight:'80%',justifyContent:'center',textAlign:'center'}}>
          <ProductListing addToCart={props.addToCart}></ProductListing>
      </div>
    </>
  )
}

export default Main