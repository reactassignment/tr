import React from 'react'
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import './styles.css'
import SortIcon from '@mui/icons-material/Sort';

/* import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel'; */

function SortFilter(props:any) {
    /* const [alignment, setAlignment] = React.useState('web');
    const handleChange = (
        event: React.MouseEvent<HTMLElement>,
        newAlignment: string,
      ) => {
        setAlignment(newAlignment);
      }; */
      var checkcount=10
      //console.log('sortfilter',props)
      if(Array.isArray(props.checkcount))
      {checkcount=props.checkcount.length}
      else{
          checkcount=10
      }
      //console.log("checkcount",checkcount)

  return (
    <div style={{marginTop:0,minHeight:30,justifyContent:'space-around',fontSize:20,alignItems:'center',display:'flex',fontWeight:'bold'}} className="filter__wrapper">
        <div className='products__wrapper' style={{display:'flex',justifyContent:'space-around',minWidth:'75%'}}>
            <div className="filter__result">{checkcount}/{props.count} Pizzas</div>
            <div style={{display:'flex',justifyContent:'space-around'}} className="sort__wrapper">
                <div className='sort__price'>Price <SortIcon></SortIcon>
                    <select value={props.sortPrice} onChange={(e)=>{
                        props.sortPizzasByPrice(e);
                        //props.sortPrice=e.target.value
                    }}>
                        <option value="any">Any</option>
                        <option value="low">Low-High</option>
                        <option value="high">High-Low</option>

                    </select>
                </div>

                <div className='sort__rating'>Rating <SortIcon></SortIcon>
                    <select value={props.sortRating} onChange={props.sortPizzasByRating}>
                        <option value="any">Any</option>
                        <option value="high">High-Low</option>
                        <option value="low">Low-High</option>
                        

                    </select>
                </div>
            </div>
        </div>

        {/* <ToggleButtonGroup
        style={{backgroundColor:'white'}}
        color="standard"
        value={alignment}
        exclusive
        onChange={handleChange}
        >
            <ToggleButton value="veg" style={{backgroundColor:'green'}}>Veg</ToggleButton>
            <ToggleButton value="non-veg">Non-Veg</ToggleButton>
            <ToggleButton value="both">Both</ToggleButton>
        </ToggleButtonGroup> */}

        {/* <div style={{backgroundColor:'white'}}>
            <div className="tw-toggle" >
                <input type="radio" name="toggle" value="veg"/>
                <label className="toggle toggle-yes" style={{backgroundColor:'green',color:'white'}}>

                    Veg
                
                </label>

                <input checked type="radio" name="toggle" value="non-veg"/>
                <label className="toggle toggle-yes" style={{backgroundColor:'brown',color:'white'}}>
                    Non-Veg
                </label>

                <input type="radio" name="toggle" value="both"/>
                <label className="toggle toggle-yes" style={{backgroundColor:'blue',color:'white'}}>
                    Both
                </label>

                <span></span>  
            </div>
        </div> */}
        {/* <div className="tw-toggle" style={{width:100}}>
            <input type="radio" name="toggle" value="false"/>
            <label className="toggle toggle-yes"><i className="fa fa-times"></i></label>
            <input checked type="radio" name="toggle" value="-1"/>
            <label className="toggle toggle-yes"><i className="fa fa-minus"></i></label>
            <input type="radio" name="toggle" value="true"/>
            <label className="toggle toggle-yes"><i className="fa fa-check"></i></label>
            <span></span>  
        </div> */}
        {/* <FormControl>
      
      <RadioGroup
        row
        aria-labelledby="demo-form-control-label-placement"
        name="position"
        defaultValue="top"
        sx={{
            color:'white'
        }}
      >
        <FormControlLabel
          value="veg"
          control={<Radio />}
          label="Veg"
          labelPlacement="top"
          style={{backgroundColor:'rgb(0,230,118)',color:'white'}}
        />
        <FormControlLabel
          value="non-veg"
          control={<Radio />}
          label="Non-Veg"
          labelPlacement="top"
          style={{backgroundColor:'blue',color:'white'}}
        />
        <FormControlLabel
          value="top"
          control={<Radio />}
          label="Both"
          labelPlacement="top"
          style={{backgroundColor:'blue',color:'white'}}
        />
        
      </RadioGroup>
        </FormControl> */}
        <div className="tw-toggle"  onChange={props.filterPizzas}>
            <input defaultChecked 
                    type="radio" 
                    name="toggle" 
                    value="veg" 
                    style={{height:65, width:65, verticalAlign: 'top',marginTop:-20,marginLeft:-18}}/>
            <label className="toggle toggle-yes" style={{marginLeft:2}} >Veg</label>
            
            <input  type="radio" name="toggle" value="non-veg"  
            style={{height:75, width:75, verticalAlign: 'top',marginTop:-28,marginLeft:8}}/>
            <label className="toggle toggle-yes" style={{marginLeft:10}}>Non-Veg</label>
            
            <input type="radio" name="toggle" value="both" style={{height:75, width:75, verticalAlign: 'top',marginTop:-25,marginLeft:0}}/>
            <label className="toggle toggle-yes" style={{marginLeft:10,marginRight:2}}>Both</label>
            <span></span>  
        </div>
    </div>
  )
}

export default SortFilter