import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../redux/reducers'
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
//import axios from 'axios';
//import { setPizzas } from '../../redux/actions/productActions'
import { Button } from '@mui/material';
import './styles.css'
import Box from '@mui/material/Box';
//import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

import FormGroup from '@mui/material/FormGroup';
//import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import ModalPopUp from '../Modalpopup'




const PizzaCard=(props:any)=> {
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

*/
useEffect(()=>{
    fetchPizzas()
  //console.log("myprops258",props)

  }) 

  var allPizzas = useSelector((state: RootState) => {
    return state.allPizzas.pizzas;
  });

  //console.log("myprops",props)
    const [pizzas,setpizzas]=useState(Array())
    
    const   fetchPizzas=()=>{
      //console.log("jio",props)
    if (Array.isArray(props.mypizza))
    {
      setpizzas(props.mypizza)
    }}
//const pizzas=props


function CheckboxLabels(props:any) {
  console.log("checked",props.id)

  return (
      <FormControl>
      {props.sizing!==null?

      <FormLabel id="demo-radio-buttons-group-label">{props.sizing.title.toUpperCase()}</FormLabel>
      :
      
      
      <FormLabel id="demo-radio-buttons-group-label">{props.topping.title.toUpperCase()}</FormLabel>
      
      
      }
    <FormGroup>
    {props.sizing!==null?
        <>
      <FormControlLabel value={0} control={<Checkbox />} label={props.sizing.items[0].size} />
      <FormControlLabel value={1} control={<Checkbox />} label={props.sizing.items[1].size} />
      <FormControlLabel value={2} control={<Checkbox />} label={props.sizing.items[2].size} />

      </>
        :
        <></>
        }

      {props.topping!==null?
        <>
      <FormControlLabel value={0} control={<Checkbox />} label={props.topping.items[0].name} />
      <FormControlLabel value={1} control={<Checkbox />} label={props.topping.items[1].name} />
      <FormControlLabel value={2} control={<Checkbox />} label={props.topping.items[2].name} />
      <FormControlLabel value={3} control={<Checkbox />} label={props.topping.items[3].name} />
      <FormControlLabel value={4} control={<Checkbox />} label={props.topping.items[4].name} />

      </>
        :
        <></>
        }
      
    </FormGroup>
    </FormControl>
  );
}


function RadioButtonsGroup(props:any) {
  console.log("radio",props.id)
  return (
    <FormControl>
      {props.sizing!==null?
      <FormLabel id="demo-radio-buttons-group-label">{props.sizing.title.toUpperCase()}</FormLabel>
      :
      <></>
      }
      {props.topping!==null?
      <FormLabel id="demo-radio-buttons-group-label">{props.topping.title.toUpperCase()}</FormLabel>
      :
      <></>
      }

      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
      >
      {props.sizing!==null?
        <>
        <FormControlLabel value={0} control={<Radio />} label={props.sizing.items[0].size} />
        <FormControlLabel value={1} control={<Radio />} label={props.sizing.items[1].size} />
        <FormControlLabel value={2} control={<Radio />} label={props.sizing.items[2].size} />
        </>
        :
        <></>
        }
        {props.topping!==null?
        <>
        <FormControlLabel value={0} control={<Radio />} label={props.topping.items[0].name} />
        <FormControlLabel value={1} control={<Radio />} label={props.topping.items[1].name} />
        <FormControlLabel value={2} control={<Radio />} label={props.topping.items[2].name} />
        <FormControlLabel value={3} control={<Radio />} label={props.topping.items[3].name} />
        <FormControlLabel value={4} control={<Radio />} label={props.topping.items[4].name} />


        </>
        :
        <></>
        }


      </RadioGroup>
    </FormControl>
  );
}

const style2 = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  minWidth: '80%',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);



function Basicpopup(props:any){
  console.log(props)
  
return(
<Modal
open={open}
onClose={handleClose}
aria-labelledby="modal-modal-title"
aria-describedby="modal-modal-description"
>
<Box sx={[style2,{borderRadius:10}]}>
  <Typography id="modal-modal-title" variant="h5" component="h2">
    Customization
  </Typography>
  
  <div style={{display:'flex',flexDirection:'column'}}>
  {props.size[0].isRadio===true?
  <RadioButtonsGroup sizing={props.size[0]} topping={null} id={props.id}></RadioButtonsGroup>
  :
  <CheckboxLabels sizing={props.size[0]} topping={null} id={props.id}></CheckboxLabels>
}
{props.toppings[0].isRadio===true?
  <RadioButtonsGroup sizing={null} topping={props.toppings[0]} id={props.id}></RadioButtonsGroup>
  :
  <CheckboxLabels sizing={null} topping={props.toppings[0]} id={props.id}></CheckboxLabels>
}
  </div>
</Box>
</Modal>
)}








    const renderList=pizzas?.map((pizza:any)=>{

        const {id,name,description,isVeg,rating,price,img_url,size,toppings}=pizza;

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
            <div className='pizza__card__body' style={{display:'grid'}}>
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
                  <ModalPopUp pizza={allPizzas[id-1]} ></ModalPopUp>
                  
                </div>
            </div>

        </div>
        
        
        
        )
    })
    
  return (
    <>
    {renderList}  
    </>
  )
}

export default PizzaCard