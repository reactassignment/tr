import { useEffect, useState } from "react"
import React from 'react'
import './styles.css'

function Quantity(props:any) {

    const [state,setState]=useState(props.quantity)
    const [price,setPrice]=useState(props.price)
    const [totalPrice,setTotalPrice]=useState(props.price)


    useEffect(()=>{
      console.log("inside Quantity,",props)
      console.log("props total price",props.isCart?props.price*props.quantity:props.price)
      console.log("price",price)
      if(props.isCart){
      console.log("price==number",!isNaN(props.pizza.price))

        console.log("update from quantity",props.pizzaId)
        props.setUpdateId(props.pizzaId)
        
        if(props.quantity===0)
        {
          props.removeFromCart(props.pizza)
        }

      }
      else{
        
      }
      props.setQuantity(state)
      //console.log(props.quantity)
    })
    const increment=()=>{
        setState( state+1)
        setPrice(price+props.price)
      }

     const decrement=()=>{
         if(state>=1)
         {
        setState(state-1)
        setPrice(price-props.price)
        }
      }



    return (
        <>
        {props.isVeg?
        <div className="container_quantity" style={{display:'flex'}}>
            
        <div className="single_container" style={{backgroundColor:'#e0f5ce',marginLeft:'10%',display:'flex',flexDirection:'column',textAlign:'center',justifyContent:'center'}}>
          <h4>
            Quantity
         </h4>
        <div className="quantity-input">
          <button className="quantity-input__modifier quantity-input__modifier--left" onClick={decrement}>
            &mdash;
          </button>
          <h6 className="quantity-input__screen" >{state}  </h6> 
          <button className="quantity-input__modifier quantity-input__modifier--right" onClick={increment}>
            &#xff0b;
          </button>  
        </div>  
        </div>
            <div className="single_container" style={{backgroundColor:'#e0f5ce',marginLeft:'10%',display:'flex',flexDirection:'column',textAlign:'center',justifyContent:'center'}}>
                <h4>
                {props.isCart?"Sub":""}Total Price:
                    
                </h4>
                <div className="quantity-input">

                <h6 className="quantity-input__screen" style={{fontSize:25,width:'100%'}}>&#8377; {props.isCart?props.price*props.quantity :price}  </h6> 
            </div>
        </div>
    </div>
    :
    <div className="container_quantity" style={{display:'flex'}}>
            
        <div className="single_container" style={{backgroundColor:'wheat',marginLeft:'10%',display:'flex',flexDirection:'column',textAlign:'center',justifyContent:'center'}}>
          <h4>
            Quantity
         </h4>
        <div className="quantity-input">
          <button className="quantity-input__modifier quantity-input__modifier--left" style={{backgroundColor:'#7d3411'}}  onClick={decrement}>
            &mdash;
          </button>
          <h6 className="quantity-input__screen" >{state}  </h6> 
          <button className="quantity-input__modifier quantity-input__modifier--right"  style={{backgroundColor:'#7d3411'}} onClick={increment}>
            &#xff0b;
          </button>  
        </div>  
        </div>
            <div className="single_container" style={{backgroundColor:'wheat',marginLeft:'10%',display:'flex',flexDirection:'column',textAlign:'center',justifyContent:'center'}}>
                <h4>
                    {props.isCart?"Sub":""}Total Price:
                </h4>
                <div className="quantity-input">

                <h6 className="quantity-input__screen" style={{fontSize:25,width:'100%'}}>&#8377; {props.isCart?props.price*props.quantity:price}  </h6> 
            </div>
        </div>
    </div>
    }
    </>
      )
}

export default Quantity

//class Quantity extends React.Component {
    /* constructor(props) {
      super(props);
      
      this.state = {value: 1}
      this.increment = this.increment.bind(this);
      this.decrement = this.decrement.bind(this);
    }
    
    increment() {
      this.setState(prevState => {value: ++prevState.value});
    }
    
    decrement() {
      this.setState(prevState => {value: prevState.value > 0? --prevState.value : 0});
    }
    
    render() {
      
      return (
        <div>
          <p>
          Set the quantity
         </p>
        <div className="quantity-input">
          <button className="quantity-input__modifier quantity-input__modifier--left" onClick={this.decrement}>
            &mdash;
          </button>
          <input className="quantity-input__screen" type="text" value={this.state.value} readonly />
          <button className="quantity-input__modifier quantity-input__modifier--right" onClick={this.increment}>
            &#xff0b;
          </button>  
        </div>  
        </div>
      );
    }
  }
   */
  //ReactDOM.render(<Quantity />, document.getElementById('app'));