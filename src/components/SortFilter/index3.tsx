import { Button, FormControl, InputLabel, MenuItem, NativeSelect} from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import Select, { SelectChangeEvent } from '@mui/material/Select';
function SortFilter() {
    const [age, setAge] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };
  return (
    <>
    <h2 style={{marginTop:0,minHeight:50,backgroundColor:'hsla(282, 59%, 34%,0.8)',justifyContent:'center',display:'flex'}}>


        <div style={{display:'flex',justifyContent:'space-between',minWidth:'30%',alignItems:'center'}}>


        <div style={{fontSize:25,fontWeight:'bold',color:'white'}}>Sort by:</div>  
        <Button disabled style={{backgroundColor:'#260954',fontSize:16,fontWeight:'bold',color:'white'}}>Price</Button>
        <div style={{backgroundColor:'white',height:'100%'}}>
         <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
                <InputLabel variant="standard" htmlFor="uncontrolled-native" style={{color:'black',backgroundColor:'#f0f0f0',padding:5,width:'150%'}}>
                Order by
                </InputLabel>
                <NativeSelect 
                defaultValue={30}
                inputProps={{
                    name: 'age',
                    id: 'uncontrolled-native',
                }}
                style={{color:'white',height:40,fontSize:20,backgroundColor:'#260954',textAlign:'center',width:'100%'}}
                >
                <option value={0} 
                style={{color:'white',height:40,backgroundColor:'#260954',textAlign:'center',width:'100%'}}
                >Ten</option>
                <option value={1}
                style={{color:'white',height:40,backgroundColor:'#260954',textAlign:'center',width:'100%'}}
                >Twenty</option>
                <option value={2} 
                style={{color:'white',height:40,backgroundColor:'#260954',textAlign:'center',width:'100%'}}
                >Thirty</option>
                </NativeSelect>
            </FormControl>
         </Box> 
         </div>
         {/* <FormControl fullWidth>
  <InputLabel id="demo-simple-select-label">Age</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value="0"
    label="Age"
    
  >
    <MenuItem value={10}>Ten</MenuItem>
    <MenuItem value={20}>Twenty</MenuItem>
    <MenuItem value={30}>Thirty</MenuItem>
  </Select>

</FormControl> */}
        {/* <div style={{backgroundColor:'white'}}>

<Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </Box>
         </div> */}
        <Button disabled  style={{backgroundColor:'#260954',fontSize:16,fontWeight:'bold',color:'white'}}>Rating</Button>  
        </div>


    </h2>
    </>
  )
}

export default SortFilter