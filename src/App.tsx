import React, { useEffect, useState } from 'react';
//import logo from './logo.svg';
//import { Counter } from './features/counter/Counter';
import './App.css';
import Header from './components/Header'
import Main from './components/Main'
import {
  BrowserRouter as Router,
  Routes,
  Route,
   
} from "react-router-dom";

import Cart from './components/Cart'
import ErrorPage from './components/ErrorPage';

const App=()=> {

  //const [cartItems,setCartItems]=useState(localStorage.getItem("cartItems")===null?Array():JSON.parse(localStorage.getItem("cartItems")))
  const [cartItems,setCartItems]=useState(JSON.parse(localStorage.getItem('cartItems') || '[]'))
  const [quantity,setQuantity]=useState(0)
  const [updateId,setUpdateId]=useState(null)
//cartItems={cartItems}

useEffect(()=>{
  //console.log("update1")

  updateCart()
  //console.log("cartItems",cartItems)
},[quantity])
useEffect(()=>{
  console.log("update2")
  //console.log("cartItems",cartItems)
  updateCart()
},[])
/* useEffect(()=>{},[cartItems]) */
//console.log("cartItems",cartItems)

const updateCart = () => {
  const cart = cartItems.slice();
  cart.forEach((x:any)=>{

      if( updateId===x.cartId ){
          
          x.count=quantity;
          x.totalPrice=x.count * x.price
      }
  })
  setCartItems(cart)

  setUpdateId(null)
  localStorage.setItem("cartItems",JSON.stringify(cart))

};

const removeFromCart = (pizza:any) => {
  const cart = cartItems.slice();
  console.log("removecart1")

  console.log("pizza",pizza)
  console.log("cart",cart)
  const index = cart.indexOf(pizza)
  console.log(cart.indexOf(pizza))
  if (index > -1) {
    cart.splice(index, 1); // 2nd parameter means remove one item only
  }
  console.log("new cart",cart)
  setCartItems(cart)
  /* setCartItems(
     cart.filter((x:any) => x._id !== pizza._id),
  ) 
 */ 
localStorage.setItem("cartItems",JSON.stringify(cart))

};

const onButtonClick =async () => {
  // using Java Script method to get PDF file
  /* try {
  let blob = await /* fetch('https://treflo-static.sgp1.digitaloceanspaces.com/administration/templates_1661858500647_Thermal%202in.pdf').then(r => r.blob());
  console.log(blob) 
   fetch('https://treflo-static.sgp1.digitaloceanspaces.com/administration/templates_1661858500647_Thermal%202in.pdf', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/pdf',
    }, */
    try {
      /* fetch('https://treflo-static.sgp1.digitaloceanspaces.com/administration/templates_1661858500647_Thermal%202in.pdf').then(response => {
        response.blob().then(blob => {
          console.log(blob)
            // Creating new object of PDF file
            const fileURL = window.URL.createObjectURL(blob);
            // Setting various property values
            let alink = document.createElement('a');
            alink.href = fileURL;
            alink.download = 'SamplePDF.pdf';
            alink.click();
        })
    }) */
    axios.get(
      'https://treflo-static.sgp1.digitaloceanspaces.com/administration/templates_1661858500647_Thermal%202in.pdf', 
      {responseType: 'blob'} // !!!
    ).then((response) => {
      console.log('response',response)
      window.open(URL.createObjectURL(response.data));
    })
  
    } catch (err) {
      console.log(err);
    }
  }



const clearCart=()=>{
  const cart=Array()
  setCartItems(cart)
  localStorage.setItem("cartItems",JSON.stringify(cart))
}

  const addToCart=(add_pizza:any,quantity:number,choiceSize:String,choiceToppings:any,price:number)=>{
    const cart=cartItems.slice()
    const total=price*quantity
    let already_exists=false
    const cartId=`${add_pizza.id}+${(choiceToppings.r).toString()}+${choiceToppings.o}+${choiceToppings.g}+${choiceToppings.e}+${choiceToppings.b}+${choiceSize}`
    const r="Red Pepper"
    const o="Onion"
    const g="Grilled Mushroom"
    const e="Extra Cheese"
    const b="Black Olive"
    const addons=(choiceToppings.r?`${r} `:"") + (choiceToppings.o?`, ${o} `:"") +(choiceToppings.g?`, ${g} `:"") +(choiceToppings.e?`, ${e} `:"") +(choiceToppings.b?`, ${b} `:"")+
    (!choiceToppings.r && !choiceToppings.o && !choiceToppings.g && !choiceToppings.e && !choiceToppings.b ? "No Add Ons":"")
    console.log(addons,"addons")

    cart.forEach((x:any)=>{
      //console.log(x.id===add_pizza.id)
      //console.log(choiceSize===x.choiceSize)
     // console.log(choiceToppings===x.choiceToppings)
        if( cartId===x.cartId ){
            already_exists=true;
            x.count+=quantity;
          x.totalPrice=x.count * x.price

        }
    })
    //console.log(already_exists,"hai")
    if(!already_exists && quantity>0){
      //console.log(choiceToppings)
      //console.log(cartId)
      
        cart.push({
            ...add_pizza,
            count:quantity,
            choiceSize:choiceSize,
            choiceToppings:choiceToppings,
            cartId: cartId,
            addons: addons,
          totalPrice: total,

        })
    }
    setCartItems(cart)
    localStorage.setItem("cartItems",JSON.stringify(cart))
    
  }
  //console.log(addToCart)
  return (
    <div style={{height:'100vh'}}>
    
     

      <Router>

     <Header cart={cartItems.length}></Header> 

    <Routes>
      <Route path="/" element=   {<Main addToCart={addToCart} cartItems={cartItems} removeFromCart={removeFromCart}></Main>} />
      <Route path="cart" element={<Cart clearCart={clearCart} cartItems={cartItems} setUpdateId={setUpdateId} removeFromCart={removeFromCart} setQuantity={setQuantity} updateCart={updateCart}/>}  />
      <Route path="/tr/" element={<Main addToCart={addToCart} cartItems={cartItems} removeFromCart={removeFromCart}></Main>} />
      <Route path="*" element={<ErrorPage></ErrorPage>}></Route>
    </Routes>
  </Router>,

      

    <footer style={{backgroundColor:'#142b4f',color:'white',minHeight:'10%',justifyContent:'center',alignItems:'center',display:'flex'}}>
        <h6 style={{fontSize:14}}>This is a part of an assignment</h6>
        <button onClick={()=>{onButtonClick()}}>Download pdf</button>
      </footer>  
    </div>
  );
}

export default App;
