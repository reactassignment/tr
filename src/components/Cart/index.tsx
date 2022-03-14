import React from 'react'
//import PizzaCard from '../ProductComponent2'
//import LoadingSkeleton from '../ProductComponent2/skeletonbody'
import '../ProductComponent2/styles.css'
//import ModalPopUp from '../Modalpopup'
import Quantity from '../Quantity'
import './styles.css'
import { Button } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';


function Cart(props:any) {
  //console.log(props.cartItems,props.cartItems.length)
  /* console.log(props.cartItems[0].toppings[0].items.filter((x:any)=>
  {
    return x.name.charAt(0).toLowerCase()
  }))
   */
  const isCart=true
  return (
    <>
        <div style={{minHeight:'80%',justifyContent:'center',textAlign:'center'}}>
            <h1 style={{textDecorationLine:'underline'}}>Cart</h1>
            
            {/* <div className='pizza__wrapper'> */}
            <div>
              {/* <ModalPopUp ></ModalPopUp> */}
               {/*  <LoadingSkeleton></LoadingSkeleton>
                <PizzaCard></PizzaCard> */}
                {/* <Quantity price={1}></Quantity> */}
                {props.cartItems.length===0?
                
                
                <div style={{display:'flex',alignItems:'center',justifyContent:'space-evenly',}}>
                <h1 >Cart is Empty</h1> 
                <img src={require("./sad2.png")} style={{width:'50%',maxWidth:500}} alt="sad face"></img>
                </div>
                :
                <>
                <div style={{display:'flex',width:'100%',backgroundColor:'hsla(307, 83%, 31%,0.99)',justifyContent:'space-between',padding:20}}>
                  <div style={{display:'grid',backgroundColor:'hsla(307, 83%, 31%,0.99)',color:'white',justifyContent:'center',alignItems:'baseline',}}>

                      <div style={{fontSize:20}}>There are &nbsp;{props.cartItems.length}&nbsp; different kind(s) of pizza(s) in the cart</div> 

                  </div>
                 
                 <Button style={{backgroundColor:'hsla(350, 100%, 89%,0.9)',color:'black',fontWeight:'bold'}}
                 onClick={()=>{
                   props.clearCart()
                 }}
                 >Clear Cart <DeleteForeverIcon></DeleteForeverIcon> </Button>
                 </div>




                 <ul className="cart-items">
                {props.cartItems.map((pizza:any) => (
                  <div key={pizza.cartId} style={{marginTop:20}}>
                  <li >
                    <div style={{display:'flex',flexDirection:'row',width:'100%',backgroundColor: pizza.isVeg?'hsla(147, 55%, 49%,0.15)':'hsla(39, 48%, 45%,0.1)',justifyContent:'space-between',alignItems:'center'}}>

                      <div>
                        <img src={pizza.img_url} alt={pizza.name}></img>
                      </div>
                        <div>
                          <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                            <div></div>
                        <h2>{pizza.name}</h2>
                        <img src={pizza.isVeg?require("../veg.png"):require("../nonveg.png")} alt={pizza.isVeg?"Veg":"Non-veg"} style={{width:20,height:20}}></img>
                        
                        </div>
                        <div  style={{fontSize:20}}>
                          <div>Price x Quantity
                        </div>
                        <div style={{fontWeight:'bold'}}>
                          = &#8377; {(pizza.price)} x {pizza.count}{" "}
                          </div>
                        </div>
                        <h4>Customization:</h4>
                    <div style={{width:'80%',backgroundColor:'hsla(284, 54%, 70%,0.4)',textAlign:'left',marginLeft:'10%',paddingLeft:'10%'}}>
                      
                      <h3 style={{textDecorationLine:'underline'}}>Size:</h3>
                      <h3> {pizza.choiceSize.toUpperCase()}</h3>
                      
                      <h3 style={{textDecorationLine:'underline'}}>Added Toppings: </h3>
                        <h3>{pizza.addons}
                        {/*  {pizza.choiceToppings.r?`${pizza.toppings[0].items}`:'no'}
                      {pizza.choiceToppings.o?`${pizza.toppings[0].items.filter((x:any)=>{
                        return x.name.charAt(0).toLowerCase()
                      })}`:''}
                      {pizza.choiceToppings.e?`${pizza.toppings[0].items.filter((x:any)=>{
                        return x.name.charAt(0).toLowerCase()
                      })}`:''}
                      {pizza.choiceToppings.g?`${pizza.toppings[0].items.filter((x:any)=>{
                        return x.name.charAt(0).toLowerCase()
                      })}`:''}
                      {pizza.choiceToppings.b?`${pizza.toppings[0].items.filter((x:any)=>{
                        return (x.name.charAt(0).toLowerCase())
                      })}`:''}
                    */}
                      </h3>

                    </div>

                    <Quantity 
                    price={ parseInt(pizza.price)   } 
                    setUpdateId={props.setUpdateId} isVeg={pizza.isVeg} quantity={pizza.count} setQuantity={props.setQuantity} pizzaId={pizza.cartId} isCart={isCart} pizza={pizza}
                    clearCart={props.clearCart} removeFromCart={props.removeFromCart}
                    ></Quantity>

                      <Button className="right" style={{backgroundColor:'red',color:'white'}}
                          onClick={() => props.removeFromCart(pizza)}
                        >
                          Remove <DeleteIcon></DeleteIcon>
                        </Button>
                      </div>
                    </div>
                  </li>
                  <hr/>
                  </div>
                ))}
              </ul>
              <div className='cart'>
                <div className='total'>
                  <div>
                    Net-Total Price: &#8377; {props.cartItems.reduce((a:any,c:any)=> a + (c.price*c.count),0)}
                  </div>
                </div>

              </div>
                 </>
              }
              <div>

              </div>
            </div>
        </div>
    </>
  )
}

export default Cart