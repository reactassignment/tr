import React,{useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProductComponent from '../ProductComponent'
import { Grid, Image } from 'semantic-ui-react'
import axios from 'axios'
import { setPizzas } from '../../redux/actions/productActions'
import GridExampleDividedNumber from '../DividerGrid'
import '../ProductComponent2/styles.css'
import LoadingSkeleton from '../ProductComponent2/skeletonbody'
import PizzaCard from '../ProductComponent2'

const ProductListing=()=> {
  const pizzas=useSelector((state)=>state)
  const dispatch=useDispatch()
const [loading,setLoading]=useState(0)
  //console.log(pizzas)
  const fetchPizzas=async()=>{
    setLoading(1)
    var response=await axios.get("https://run.mocky.io/v3/ec196a02-aaf4-4c91-8f54-21e72f241b68").catch((e)=>
      console.log(e)
    )
    //console.log(response)
    if(response)
    {
      response=response.data
    }
    //console.log(response)
    dispatch(setPizzas(response))
    setLoading(0)
  }


  useEffect(()=>{
    fetchPizzas()
  },[])


  return (
    <>
      <h1 style={{marginLeft:10}}>Pizza Menu</h1>
      <div className='pizza__wrapper'>
      {loading===1?
          <>
                <LoadingSkeleton></LoadingSkeleton>
                <LoadingSkeleton></LoadingSkeleton>
                <LoadingSkeleton></LoadingSkeleton>
                <LoadingSkeleton></LoadingSkeleton>
                <LoadingSkeleton></LoadingSkeleton>
                <LoadingSkeleton></LoadingSkeleton>
                <LoadingSkeleton></LoadingSkeleton>
                <LoadingSkeleton></LoadingSkeleton>
                <LoadingSkeleton></LoadingSkeleton>
           </> 
        : 
        <PizzaCard></PizzaCard>
          
      }
      </div>
    </>
  )
}

export default ProductListing