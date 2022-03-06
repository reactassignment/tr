import { Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import ShoppingCart from '@mui/icons-material/ShoppingCart'
import MenuBook from '@mui/icons-material/MenuBook'

function ErrorPage() {
  return (
    <div style={{minHeight:'80vh',}}>
        <h2 style={{height:'20vh',justifyContent:'center',display:'flex',alignItems:'center',fontSize:35,textAlign:'center'}}>
            This page does not exist! You might have landed in space.</h2>
            <h2 style={{justifyContent:'center',display:'flex',alignItems:'center',fontSize:35}}> Go back to &nbsp;</h2>
        <h1 style={{height:'20vh',justifyContent:'center',display:'flex',alignItems:'center',fontSize:35}}>
        
            
            
        

        
        <Link to='/' style={{color:'white',textDecorationLine:'none'}}>
              <Button style={{color:'white',backgroundColor:'rgba(0, 19, 40,0.8)'}}><div className='App-link' style={{color:'white',fontSize:25,fontWeight:'bold'}}>Menu</div>
              <div style={{marginLeft:2,marginTop:5}}>
                <MenuBook  color='inherit' fontSize='medium'></MenuBook>
              </div>
              </Button>
            </Link>
           <div> &nbsp; or &nbsp;</div>
                <div style={{width:10,height:10}}>  </div>
           <Link to='/cart'style={{color:'white',textDecorationLine:'none'}}>  
                <Button style={{color:'white',backgroundColor:'rgba(0, 19, 40,0.8)'}}><div className='App-link' style={{color:'white',fontSize:25,fontWeight:'bold'}}>Cart</div>
              <div style={{marginLeft:2,marginTop:5}}>
                
                <ShoppingCart color='inherit' fontSize='medium'></ShoppingCart>
               </div> 
               </Button>
                
            </Link>
            </h1>
    </div>
  )
}

export default ErrorPage