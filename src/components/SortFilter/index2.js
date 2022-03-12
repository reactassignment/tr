import { Button, FormControl, MenuItem, Select } from '@mui/material'
import { useState } from 'react';

import  React from 'react';
/*import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';


    
   */
import  useMinimalSelectStyles  from './minimalSelect.styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function SortFilter() {
    
        const [val,setVal] = useState(1);
      
        const handleChange = (event) => {
          setVal(event.target.value);
        };
      
        const minimalSelectClasses = useMinimalSelectStyles();
      
        const iconComponent = (props) => {
          return (
            <ExpandMoreIcon className={props.className + " " + minimalSelectClasses.icon}/>
          )};
      
        // moves the menu below the select input
        const menuProps = {
          classes: {
            paper: minimalSelectClasses.paper,
            list: minimalSelectClasses.list
          },
          anchorOrigin: {
            vertical: "bottom",
              horizontal: "left"
          },
          transformOrigin: {
            vertical: "top",
              horizontal: "left"
          },
          getContentAnchorEl: null
        }

  return (
    <>
    <h2 style={{marginTop:0,minHeight:100,backgroundColor:'hsla(282, 59%, 34%,0.8)',justifyContent:'center',display:'flex'}}>


<div style={{display:'flex',justifyContent:'space-between',minWidth:'30%',alignItems:'center'}}>


  <div style={{fontSize:25,fontWeight:'bold',color:'white'}}>Sort by:</div>  
  <Button disabled style={{backgroundColor:'#260954',fontSize:16,fontWeight:'bold',color:'white'}}>Price</Button>  

  {/* <Box sx={{ minWidth: 120 ,color:'white'}}>
      <FormControl fullWidth>
        <InputLabel variant="standard" htmlFor="uncontrolled-native" style={{color:'white',fontSize:25,backgroundColor:'#260954'}}>
          Age
        </InputLabel>
        <NativeSelect
          defaultValue={0}
          inputProps={{
            name: 'age',
            id: 'uncontrolled-native',
          }}
          style={{color:'white'}}
        >
          <option value={0} style={{color:'black'}}>Any</option>
          <option value={1} style={{color:'black'}}>Low to High</option>
          <option value={2} style={{color:'black'}}>High to Low</option>
        </NativeSelect>
      </FormControl>
    </Box> */}

<FormControl>
      <Select
        disableUnderline
        classes={{ root: minimalSelectClasses.select }}
        MenuProps={menuProps}
        IconComponent={iconComponent}
        value={val}
        onChange={handleChange}
        style={{backgroundColor:'white',}}
      >
        <MenuItem value={0}>Principle</MenuItem>
        <MenuItem value={1}>Sketch</MenuItem>
        <MenuItem value={2}>Photoshop</MenuItem>
        <MenuItem value={3}>Framer</MenuItem>
      </Select>
    </FormControl>
  <Button disabled  style={{backgroundColor:'#260954',fontSize:16,fontWeight:'bold',color:'white'}}>Rating</Button>  
</div>


</h2>
    </>
  )
}

export default SortFilter