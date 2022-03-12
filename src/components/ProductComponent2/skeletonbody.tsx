import React from 'react'
import Skeleton from '@mui/material/Skeleton';
import './styles.css'
import { Button } from '@mui/material';

function LoadingSkeleton() {
  return (
        <>
            {/* <Skeleton variant='text' animation='wave'></Skeleton>
            <Skeleton variant='circular'  width={40} height={40}></Skeleton>
            <Skeleton variant='rectangular'  animation='wave' width={40} height={40}></Skeleton>
 */}
            <div className='pizza__card' >

            <div className="container"> 
                <div className='pizza__card__img' >
                    <Skeleton variant='rectangular'  animation='wave'  width={'100%'} height={'100%'}></Skeleton>

                </div>
                <h4 className='top-left' style={{paddingLeft:10,paddingRight:10,width:100,height:20,}}>
                    <Skeleton variant='text'   sx={{bgcolor:'hsla(230, 9%, 80%,0.9)'}}></Skeleton>

                </h4>
                <div className='bottom-left' style={{display:'flex',paddingLeft:10,paddingRight:10,width:120,height:25,}}>
                    <Skeleton variant='text'  width={'100%'} sx={{bgcolor:'hsla(230, 9%, 80%,0.9)'}}></Skeleton>

                    
                </div>
                <div className='bottom-right' style={{paddingLeft:10,paddingRight:10,width:100,height:25,backgroundColor: 'rgba(71, 70, 70, 0.807)',borderRadius:15 }}>
                    <Skeleton variant='text'  width={'100%'} height={'100%'} sx={{bgcolor:'hsla(230, 9%, 80%,0.9)'}}></Skeleton>

                </div>
            </div>
            <div className='pizza__card__body' style={{textAlign:'center',justifyContent:'center',}}>
                <div className='pizza__card__title' style={{width:'100%',justifyContent:'space-between',alignItems:'center'}}>
                    <h2 className='pizza__card__name' style={{margin:5,textAlign:'left',width:'80%'}}>
                        <Skeleton variant='text' height={40} ></Skeleton>
                        
                    </h2>
                    <div style={{textAlign:'right'}}>
                    <Skeleton variant='circular'  width={30} height={30}></Skeleton>
                        
                    </div>
                </div>
                <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center',height:60}}>
                    <div className='pizza__card__description' style={{flex:5,textAlign:'justify'}}>
                    <Skeleton variant='text' height={20} ></Skeleton>
                    <Skeleton variant='text' height={20} ></Skeleton>
                        
                    </div>
                    <div style={{width:10}}></div>
                    <div className='pizza__card__price' style={{flex:2,fontSize:20,fontWeight:'bold',height:35,}}>
                        <Button variant="outlined" disabled style={{color:'black',height:40,justifyContent:'center',alignItems:'center',textAlign:'center'}}>

                        <div style={{marginTop:-5}}>
                        <Skeleton variant='text' height={40} width={60} animation='wave'></Skeleton>
                        </div>
                        </Button>
                    </div>
                </div>

                
                <Button className='pizza__card__button' style={{fontWeight:'bold',borderRadius:15,fontSize:18,backgroundColor:'#f0f0f0',color:'white',width:'100%',flexGrow:1,marginTop:5,height:42}}>

                    <Skeleton variant='text' animation='wave' width={150} height={40} ></Skeleton>

                </Button>
            </div>

        </div>
        </>
  )
}

export default LoadingSkeleton