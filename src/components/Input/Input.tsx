import React, {useState, useEffect} from 'react'

import { TextField, Button, Box } from "@mui/material";

import { centeredDiv } from "../../StylesConstants/StylesConstants";
 
const InputComponent = () => {
  const [inpustValue, setInputValue] = useState<String | null>('');

  useEffect(() => console.log(inpustValue), [inpustValue])

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  }

  const createPost = () => {
    
  }

  const container = {
    ...centeredDiv,
    flexDirection: 'row',
    width: 'auto',

    '& > *': {
      margin: '15px',
    },
  }


  return (
    <Box sx={container}>

      <TextField 
        label="Enter note" 
        variant="outlined"  
        autoComplete="off"
        value={inpustValue}
        onChange={handleInputChange}
      />

      <Button 
        variant="outlined"
        onClick={() => createPost()}
      >
        Create
      </Button>

    </Box>
  );
}

export default InputComponent;