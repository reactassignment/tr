import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../redux/reducers'
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import axios from 'axios';
import { setPizzas } from '../../redux/actions/productActions'
import { Button } from '@mui/material';
import './styles.css'

const PizzaCard=()=> {
    /* const pizzacard=useSelector((state)=>state)
  const dispatch=useDispatch()
const [loading,setLoading]=useState(0)
  console.log(pizzacard)
  const fetchPizzas=async()=>{
    setLoading(1)
    var response=await axios.get("https://run.mocky.io/v3/ec196a02-aaf4-4c91-8f54-21e72f241b68").catch((e)=>
      console.log(e)
    )
    console.log(response)
    if(response)
    {
      response=response.data
    }
    console.log(response)
    dispatch(setPizzas(response))
    setLoading(0)
  }


  useEffect(()=>{
    fetchPizzas()
  },[]) */

    const pizzas=useSelector((state:RootState)=>state.allPizzas.pizzas)

    const renderList=pizzas.map((pizza:any)=>{

        const {id,name,description,isVeg,rating,price,img_url}=pizza;

        return(

       

        <div className='pizza__card' key={id}>

            <div className="container"> 
                <img className='pizza__card__img' src={img_url}></img>
                <h4 className='top-left' style={{paddingLeft:10,paddingRight:10}}>Rating: {rating}/5</h4>
                <div className='bottom-left' style={{display:'flex',paddingLeft:10,paddingRight:10}}>
                    {[0,0,0,0,0].map((el,i)=>
                    <div
                        key={`${id}-${i}`}
                        
                        
                        style={{backgroundColor:'none',color:"yellow"}}
                        >
                            {i<Math.floor(rating)?
                            <StarIcon color='inherit'></StarIcon>
                            :
                            i<Math.floor(rating+0.5)?
                            <StarHalfIcon></StarHalfIcon>:
                            <StarOutlineIcon></StarOutlineIcon>}
                    </div>)}
                </div>
                <div className='bottom-right' style={{paddingLeft:10,paddingRight:10}}>
                        {isVeg?<h3>100% Veg</h3>:<h3>Non-Veg</h3>}
                    </div>
            </div>
            <div className='pizza__card__body'>
                <div className='pizza__card__title' style={{width:'100%',justifyContent:'space-between',alignItems:'center'}}>
                    <h2 className='pizza__card__name' style={{margin:5,textAlign:'left'}}>{name}</h2>
                    <div style={{textAlign:'right'}}>
                        {isVeg?<img src={require('../veg.png')} style={{width:20,height:20  }}></img>:<img src={require('../nonveg.png')} style={{width:20,height:20}}></img>}
                    </div>
                </div>
                <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center',height:60}}>
                    <div className='pizza__card__description' style={{flex:5,textAlign:'justify'}}>{description}</div>
                    <div style={{width:10}}></div>
                    <div className='pizza__card__price' style={{flex:2,fontSize:25,fontWeight:'bold'}}>&#8377;{price}</div>
                </div>

                
                <Button className='pizza__card__button' style={{fontWeight:'bold',borderRadius:15,fontSize:18,backgroundColor:'#f74b11',color:'white',width:'100%',flexGrow:1,marginTop:10}}>Add to Cart</Button>
            </div>

        </div>
        
        
        
        )
    })
    
  return (
    
    renderList
  )
}

export default PizzaCard