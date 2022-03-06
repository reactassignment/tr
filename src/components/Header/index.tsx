import React from 'react'
import {Link} from 'react-router-dom'
import { Button } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuBookIcon from '@mui/icons-material/MenuBook';

import '../../App.css'
import MenuBook from '@mui/icons-material/MenuBook';
const Header=()=> {
  return (
    <div className="App">
    <header  className="App-header" style={{backgroundColor:'#db3a04',fontSize:14,flexDirection:'row',justifyContent:'space-between',paddingLeft:5,paddingRight:5,minHeight:'10vh'}}>
        <img src={require('./pizza3.png')} alt={"logo"} style={{width:40,height:40,}}></img>
        <h1 style={{color:'white',}}>
              
              My Pizza
          </h1>
          <div style={{display:'flex',flexDirection:'row',}}>
            <Link to='/' style={{color:'white',textDecorationLine:'none'}}>
              <Button style={{color:'white',backgroundColor:'rgba(110, 19, 40,0.8)'}}><div className='App-link' style={{color:'white',fontSize:12,fontWeight:'bold'}}>Menu</div>
              <div style={{marginLeft:2,marginTop:5}}>
                <MenuBookIcon  color='inherit' fontSize='medium'></MenuBookIcon>
              </div>
              </Button>
            </Link>
            
                <div style={{width:10}}></div>
           <Link to='/cart'style={{color:'white',textDecorationLine:'none'}}>  
                <Button style={{color:'white',backgroundColor:'rgba(110, 19, 40,0.8)'}}><div className='App-link' style={{color:'white',fontSize:12,fontWeight:'bold'}}>Cart</div>
              <div style={{marginLeft:2,marginTop:5}}>
                
                <ShoppingCartIcon color='inherit' fontSize='medium'></ShoppingCartIcon>
               </div> 
               </Button>
                
            </Link>
        </div>
      </header>
      </div>
  )
}

export default Header