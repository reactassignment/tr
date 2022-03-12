import React,{useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
//import ProductComponent from '../ProductComponent'
//import { Grid, Image } from 'semantic-ui-react'
import axios from 'axios'
import { setPizzas } from '../../redux/actions/productActions'
//import GridExampleDividedNumber from '../DividerGrid'
import '../ProductComponent2/styles.css'
import LoadingSkeleton from '../ProductComponent2/skeletonbody'
import PizzaCard from '../ProductComponent2'
import { Button } from '@mui/material'
import SortFilter from '../SortFilter'
import { RootState } from '../../redux/reducers'
import Skeleton from '@mui/material/Skeleton';
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import StarOutlineIcon from '@mui/icons-material/StarOutline';

const ProductListing=()=> {
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
    
    
      
    
    console.log("response",response)
    
    dispatch(setPizzas(response))
    setLoading(0)
    basicload=1
  }
var basicload=0

  useEffect(()=>{
    setLoading(1)
    
    
      fetchPizzas()
      
    
    console.log("basicload",basicload)
    basicload=0
    //fetchPizzas()
    //setTimeout(fetchPizzas,600)
   // dispatch(setPizzas(pizzas))
  },[])



  //const pizzas=useSelector((state)=>state)
  var allPizzas = useSelector((state: RootState) => {
    return state.allPizzas.pizzas;
  });
  var pizzas = useSelector((state: RootState) => {
    return state.allPizzas.pizzas;
  });

  const updatepizza=()=>{
    setmypizza(pizzas)
    console.log(pizzas,"pizzasaasa")
  }

  useEffect(()=>{
    if(mypizza===null)
    {
      updatepizza()
      updateFilterPizzas()
    }
  })
  

const [sortPrice,setSortPrice]=useState("any");
const [sortRating,setSortRating]=useState("any");
const [isVeg,setIsVeg]=useState("veg");
const [mypizza,setmypizza]=useState(null)

useEffect(()=>{
  //setmypizza(pizzas)
  console.log("mypizza",mypizza)

},[mypizza])





useEffect(()=>{
  if(sortPrice!=="any")
  {
    updateSortPrice()
    
  }
},[sortPrice])

const updateSortPrice=()=>{
  console.log("sortPrice",sortPrice)
  pizzas=pizzas
        .slice()
        .sort((a:any, b:any) =>
          sortPrice === "low"?  a.price > b.price ? 1 : -1 
            : 
            sortPrice === "high"? a.price < b.price? 1 : -1
            : 
            /* sortRating==="high"? a._rating > b._rating ? 1  : -1 
            
            :
            sortRating==="low"? a._rating > b._rating ? 1 : -1
            :
            sortRating==="any"? a._id < b._id? 1 : -1
            : */
            -1

            )
        console.log("allsortprice",pizzas)
        if(isVeg==="veg")
        {
          pizzas=pizzas?.filter((pizza: { isVeg: boolean })=>pizza.isVeg===true)
        }
        else if(isVeg==="non-veg")
        {
          pizzas=pizzas?.filter((pizza: { isVeg: boolean })=>pizza.isVeg===false)

        }
        console.log("vegsortprice",pizzas)

        setSortRating("any")
        setmypizza(pizzas)
}


const sortPizzasByPrice=(e:any)=>{
  console.log("input",e.target.value)
  setSortPrice(e.target.value)
  
}






useEffect(()=>{
  if(sortRating!=="any")
  {
    updateSortRating()
  }
  },[sortRating])

const updateSortRating=()=>{
  console.log("sortRating",sortRating)
  console.log("pizzaslist",pizzas)
  pizzas=pizzas
        .slice()
        .sort((a:any, b:any) =>
          sortRating === "low"? a.rating > b.rating ? 1 : -1 : 
          sortRating === "high"? a.rating < b.rating? 1 : -1 : -1
            /*:  a._id < b._id? 1 
            : -1*/
            
        )

        console.log("pizzasortrating",pizzas)
        if(isVeg==="veg")
        {
          pizzas=pizzas?.filter((pizza: { isVeg: boolean })=>pizza.isVeg===true)
        }
        else if(isVeg==="non-veg")
        {
          pizzas=pizzas?.filter((pizza: { isVeg: boolean })=>pizza.isVeg===false)

        }
    setSortPrice("any")
    setmypizza(pizzas)

}
const sortPizzasByRating=(e:any)=>{
  console.log("input",e.target.value)
  setSortRating(e.target.value)
  

}


useEffect(()=>{
  updateFilterPizzas()
},[isVeg])

const updateFilterPizzas=()=>{
  console.log("isVeg",isVeg)
  if(isVeg==='veg')
  {
    pizzas=allPizzas
    //fetchPizzas()

    //console.log(pizzas)
    if(pizzas!==null)
    {
    pizzas=pizzas?.filter((pizza: { isVeg: boolean })=>pizza.isVeg===true)
    console.log("pizzas",pizzas)
    //customisedPizzaSet()
    setmypizza(pizzas)
  }

  }
  else if(isVeg==="non-veg")
  {
    pizzas=allPizzas
    //fetchPizzas()

    //console.log(pizzas)
    pizzas=pizzas.filter((pizza: { isVeg: boolean })=>pizza.isVeg===false)
    console.log(pizzas)
    setmypizza(pizzas)

    //customisedPizzaSet()

  }
  else if(isVeg==="both"){
    //console.log(allPizzas)
    //fetchPizzas()
    pizzas=allPizzas
    console.log(pizzas)
    //customisedPizzaSet()
    setmypizza(pizzas)

  }
}



const filterPizzas=(e:any)=>{
  console.log("input",e.target.value)
  setIsVeg(e.target.value)
  setSortPrice("any")
  setSortRating("any")
}

const customisedPizzaSet=()=>{
  setLoading(1)
  
  //console.log(response)

  

  //console.log(response)
  dispatch(setPizzas(pizzas))
  setLoading(0)
}

const renderlistPizza=pizzas?.map((pizza:any)=>{

  const {id,name,description,isVeg,rating,price,img_url}=pizza;

  return(

 

  <div className='pizza__card' key={id}>

      <div className="container"> 
          <img className='pizza__card__img' src={img_url} alt="pizza_img"></img>
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
                  {isVeg?<h3 style={{backgroundColor:'green',paddingLeft:10,paddingRight:10,borderRadius:15}}>100% Veg</h3>
                  :
                  <h3 style={{backgroundColor:'brown',paddingLeft:10,paddingRight:10,borderRadius:15}}>Non-Veg</h3>}
              </div>
      </div>
      <div className='pizza__card__body'>
          <div className='pizza__card__title' style={{width:'100%',justifyContent:'space-between',alignItems:'center'}}>
              <h2 className='pizza__card__name' style={{margin:5,textAlign:'left'}}>{name}</h2>
              <div style={{textAlign:'right'}}>
                  {isVeg?<img src={require('../veg.png')} style={{width:20,height:20  }} alt="veg_img"></img>
                  :
                  <img src={require('../nonveg.png')} style={{width:20,height:20}} alt="non_veg_img"></img>}
              </div>
          </div>
          <div className="description__price" style={{display:'flex',justifyContent:'space-between',alignItems:'center',minHeight:60}}>
              <div className='pizza__card__description' style={{flex:5,textAlign:'justify'}}>{description}</div>
              
              <div className='pizza__card__price' style={{flex:2,textAlign:'right'}}>
                  
                  <Button variant="outlined" disabled style={{color:'black',height:40}} >
                      <div style={{fontSize:25,fontWeight:'bold'}}>&#8377;{price}</div>
                  </Button>
                  
              </div>
          </div>

          <div className='pizza__card__button'>
          <Button  style={{fontWeight:'bold',borderRadius:15,fontSize:18,backgroundColor:'#f74b11',color:'white',width:'100%',flexGrow:1,}}>Add   </Button>
          </div>
      </div>

  </div>
)})


  return (
    <>
      <h1 style={{marginLeft:0,textDecorationLine:'underline'}}>Pizza Menu</h1>
      
      {loading===0?
      <SortFilter count={pizzas?.length} checkcount={mypizza} veg={isVeg} sortPrice={sortPrice} sortRating={sortRating}
      filterPizzas={filterPizzas} sortPizzasByPrice={sortPizzasByPrice} sortPizzasByRating={sortPizzasByRating}
      ></SortFilter>
      :
      <>
        <div   style={{backgroundColor:'#f0f0f0',justifyContent:'space-around',display:'flex',flexDirection:'row'}}>
          
            <Skeleton variant='text' animation='wave' width={'15%'} height={40}></Skeleton>
          
            <Skeleton variant='text' animation='wave' width={'15%'} height={40}></Skeleton>
            <Skeleton variant='text' animation='wave' width={'15%'} height={40}></Skeleton>
            <Skeleton variant='text' animation='wave' width={'15%'} height={40}></Skeleton>
            
        </div>
      </>
      }
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
                <LoadingSkeleton></LoadingSkeleton>
           </> 
        : 
        <>
        
        <PizzaCard mypizza={mypizza}></PizzaCard>
        </>
       }  
          
     
      </div>
    </>
  )
}

export default ProductListing