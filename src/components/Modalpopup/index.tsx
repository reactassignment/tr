import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import {useEffect, useState } from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

import FormGroup from '@mui/material/FormGroup';
//import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import '../ProductComponent2/styles.css'
import Quantity from '../Quantity';

 function CheckboxLabelsToppings(props:any) {
    //console.log(props.toppings)
    const [state,setState]=useState(
      {
        r:false,
        o:false,
        g:false,
        e:false,
        b:false,
      }
    )
    useEffect(()=>{
      //console.log(state)
      props.setSelectedToppings(state)
    })
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setState({
        ...state,
        [event.target.name]: event.target.checked,
      });
    };
    /* const{ 
      redPepper,
      onion,
      grilledMushroom,
      extraCheese,
      blackOlive } = state; */ 
  return (
      <FormControl>
    <FormLabel id="demo-radio-buttons-group-label">{props.toppings.title.toUpperCase()}</FormLabel>

    <FormGroup
    
    
    >
    {
              props.toppings.items.map((x:any)=>{
                  //console.log(x)
                  return(
                <FormControlLabel   
                control={
                      <Checkbox onChange={handleChange} name={x.name.toLowerCase().charAt(0)}/>
                    }
                
                label={x.name} key={x.name} />
                )
              })
          }
      
    </FormGroup>
    </FormControl>
  );
}

function RadioButtonsGroupSize(props:any) {
    //console.log(props.size)
  const [state,setState]=useState("regular")
  useEffect(()=>{
    props.setSelectedSize(state)
  })
  return (
    <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">{props.size.title.toUpperCase()}</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="regular"
        name="radio-buttons-group"
        onChange={(e)=>{
          //console.log(e.target.value)
          setState(e.target.value)
        }}
      >
          {
              props.size.items.map((x:any)=>{
                  //console.log(x)
                  //console.log(x.size)
                  return(
                      <div key={x.size}>
                      {x.size.includes('Regular')?
                      
                      <FormControlLabel defaultChecked value={x.size.toLowerCase()}  control={<Radio />} label={x.size}  />
                      :
                      <FormControlLabel value={x.size.toLowerCase()} control={<Radio />} label={x.size}  />
                      }
                    
                </div>
                )
              })
          }
        
      </RadioGroup>
    </FormControl>
  );
}
function RadioButtonsGroupToppings(props:any) {
   // console.log(props.toppings)
   const [state,setState]=useState(
    {
      r:false,
      o:false,
      g:false,
      e:false,
      b:false,
    }
  )
  const defaultState={
    r:false,
    o:false,
    g:false,
    e:false,
    b:false,
  }
   useEffect(()=>{
    //console.log(state)

     props.setSelectedToppings(state)
   })

  return (
    <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">{props.toppings.title.toUpperCase()}</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="none"
        name="radio-buttons-group"
        onChange={(e)=>{
          console.log(e.target.value)
          if(e.target.value!=="none")
          {

          setState({
              ...defaultState,
              [e.target.name]: true,
            })
          }
          else{
            setState({
              ...defaultState,
              
            })
          }
        }}
      >
            <FormControlLabel value="none" control={<Radio />} label="None" />
          
          {
              props.toppings.items.map((x:any)=>{
                  //console.log(x)
                  return(
                <FormControlLabel value={x.name.toLowerCase()} name={x.name.toLowerCase().charAt(0)} control={<Radio />} label={x.name} key={x.name} />
                )
              })
          }
        
      </RadioGroup>
    </FormControl>
  );
}
const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

 function BasicModal(props:any) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  //console.log(props.pizza)
  const [quantity,setQuantity]=useState(1)
  const [selectedSize,setSelectedSize]=useState("regular")
  const [selectedToppings,setSelectedToppings]=useState("none")


  return (
    <div>
      <Button className="pizza__card__button"
      style={{fontWeight:'bold',borderRadius:15,fontSize:18,backgroundColor:'#f74b11',color:'white',width:'100%',flexGrow:1,}}
       onClick={()=>{
            //console.log(props.pizza)
            
           handleOpen()}
       }>ADD</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={[style,{borderRadius:10,minWidth:'80%',minHieght:'50%'}]}>
            <div style={{display:'flex',flexDirection:"row", width:'100%', justifyContent:'space-between'}}>
                <div>
                    <div style={{backgroundColor:'#faf0f9',borderRadius:5,width:'90%',marginLeft:15,padding:10,}}>
                        <h2>
                            Customization for {props.pizza.name} 
                        </h2>
                        <div style={{fontWeight:'bold',fontSize:20,marginTop:-10,display:'flex',justifyContent:'space-between'}}>
                            (&#8377;{props.pizza.price})
                        
                        <h3>{props.pizza.isVeg?
                        <img src={require('../veg.png')} alt="veg" style={{width:20,height:20}}></img>:
                        <img src={require('../nonveg.png')} alt="non-veg" style={{width:20,height:20}} />
                        }</h3></div>
                        <div style={{textAlign:'justify',marginTop:5}}>
                            <h5>Add your favourite customization & then Add to cart.</h5><hr></hr><h6> Click or Tap outside to close</h6>
                        </div>
                    </div>
            
                    <div style={{display:'flex',flexDirection:'column' , marginTop:5,marginLeft:15}}>
                    
                    <RadioButtonsGroupSize size={props.pizza.size[0]} setSelectedSize={setSelectedSize}></RadioButtonsGroupSize>
                    {props.pizza.toppings[0].isRadio===true?
                    <RadioButtonsGroupToppings toppings={props.pizza.toppings[0]} setSelectedToppings={setSelectedToppings}/>

                    :
                    <CheckboxLabelsToppings  toppings={props.pizza.toppings[0]} setSelectedToppings={setSelectedToppings}/>
                    }
                    </div>
          </div>
          <div style={{display:'flex',flexDirection:'column',justifyContent:'center'}}>
            <img className="image-adjust" src={props.pizza.img_url} alt={props.pizza.name} style={{marginBottom:20}}></img>
        <Quantity price={props.pizza.price} isVeg={props.pizza.isVeg} quantity={quantity} setQuantity={setQuantity}></Quantity>
            <Button className='button_container'
      style={{fontWeight:'bold',borderRadius:15,fontSize:18,backgroundColor:'#f74b11',color:'white',marginLeft:'17.5%',width:'75%',marginTop:20}}
       onClick={()=>{
            //console.log(props.pizza)

            props.addToCart(props.pizza,quantity,selectedSize,selectedToppings, props.pizza.price)
            handleClose()
       }}>ADD to Cart</Button>
        </div>
        </div>
        </Box>
      </Modal>
    </div>
  );
}

function ModalPopUp(props:any) {
    //console.log(props.pizza)
    //console.log(props)
  return (
    <div>
      <BasicModal pizza={props.pizza} addToCart={props.addToCart}></BasicModal>
    </div>
  );
}
export default ModalPopUp