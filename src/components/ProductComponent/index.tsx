import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/reducers'
//import {FontAwesomeIcon}  from '@fortawesome/react-fontawesome';
//import Icon from '@mui/material/Icon';
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
//import FilterCenterFocusIcon from '@mui/icons-material/FilterCenterFocus';

const ProductComponent=()=> {
    const pizzas=useSelector((state:RootState)=>state.allPizzas.pizzas)
    const renderList=pizzas.map((pizza:any)=>{
        const {id,name,description,isVeg,rating,price,img_url}=pizza;
        return(
        <div style={{width:'30%' ,margin:10,color:'black'}} key={id}>
        <div className='ui link cards'>
            <div className='card'>
                <div className='image' style={{height:150}}>
                    <img src={img_url} alt="pizza_img"></img>
                </div>
                </div>
                <div className='card'>    
                <div className='content'>
                    <div className='header' style={{display:'flex',justifyContent:'space-between'}}>{name}
                    <div>
                        {isVeg?<img src={require('../veg.png')} alt="veg_img" style={{width:20,height:20  }}></img>:<img src={require('../nonveg.png')} alt="non_veg_img" style={{width:20,height:20}}></img>}
                    </div>
                    </div>
                    <div>{description}</div>
                    <h2>&#8377;{price}</h2>
                {/*     {[0,0,0,0,0].map((el,i)=>
                <FontAwesomeIcon 
                    key={`${id}-${i}`}
                    name={i<Math.floor(rating)?'star':i<Math.floor(rating+0.5)?'star-half-empty' :'star-o'} 
                    size={18} 
                    color={"#8126d1"}
                    style={{backgroundColor:'white'}}
                    >
                </FontAwesomeIcon>)} */}

                    <h4 style={{backgroundColor:'white'}}>{rating}/5 star rating</h4>
                    <div style={{display:'flex'}}>
                        {[0,0,0,0,0].map((el,i)=>
                        <div
                            key={`${id}-${i}`}
                            
                            
                            style={{backgroundColor:'white',color:"#8126d1"}}
                            >
                                {i<Math.floor(rating)?
                                <StarIcon color='inherit'></StarIcon>
                                :
                                i<Math.floor(rating+0.5)?
                                <StarHalfIcon></StarHalfIcon>:
                                <StarOutlineIcon></StarOutlineIcon>}
                        </div>)}
                    </div>
                    
                </div>    

            </div>
        </div>
    </div>
        )
    }
    
    )
    //const {id,title,category}=pizzas[0]
    //console.log(id)
  return (

    renderList
  )
}

export default ProductComponent