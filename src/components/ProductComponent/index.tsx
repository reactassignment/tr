import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/reducers'

const ProductComponent=()=> {
    const pizzas=useSelector((state:RootState)=>state.allPizzas.pizzas)
    const renderList=pizzas.map((pizza:any)=>{
        const {id,name,description,isVeg,rating,price,img_url}=pizza;
        return(
        <div style={{width:'30%' ,margin:10}} key={id}>
        <div className='ui link cards'>
            <div className='card'>
                <div className='image' style={{height:150}}>
                    <img src={img_url}></img>
                </div>
                </div>
                <div className='card'>    
                <div className='content'>
                    <div className='header'>{name}</div>
                    <div>{description}</div>
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