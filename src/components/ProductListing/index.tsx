import React,{useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProductComponent from '../ProductComponent'
import { Grid, Image } from 'semantic-ui-react'
import axios from 'axios'
import { setPizzas } from '../../redux/actions/productActions'
import GridExampleDividedNumber from '../DividerGrid'

const ProductListing=()=> {
  const pizzas=useSelector((state)=>state)
  const dispatch=useDispatch()
const [loading,setLoading]=useState(0)
  console.log(pizzas)
  const fetchizzas=async()=>{
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
    fetchizzas()
  },[])


  return (
    <>
    <h1 style={{marginLeft:10}}>Pizza Menu</h1>
{loading===1?
    <div style={{width:'80%',marginLeft:'10%'}}>
      
      <GridExampleDividedNumber ></GridExampleDividedNumber>
      </div>:
    
    <div className='ui grid container' style={{marginTop:20}}>
      
      <ProductComponent></ProductComponent>
    </div>
    }
    </>
  )
}

export default ProductListing