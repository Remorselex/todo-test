import React, {useState, useEffect} from 'react';

import {useDispatch, useSelector} from 'react-redux'

import { TextField, Button, Box } from "@mui/material";

import { centeredDiv } from "../../StylesConstants/StylesConstants";
import { appSelector, setPost, setQuery } from '../../store/appSlice/appSlice';
 
const InputComponent = () => {
  const {postQuery} = useSelector(appSelector);
  const [inputValue, setInputValue] = useState<String  | undefined>(postQuery);

  const dispatch = useDispatch();

  
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  }
  

  const updatePosts = () => {
    if (inputValue) {
      dispatch(setPost(inputValue));
      setInputValue('');
    }
  }

  useEffect(() => {
    let timeoutId: NodeJS.Timeout | null = null;
  
    const setInputText = () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
  
      timeoutId = setTimeout(() => {
        dispatch(setQuery(inputValue));
      }, 300);
    };
  
    setInputText();
  
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };

  }, [dispatch, inputValue]);
  
  const container = {
    ...centeredDiv,
    flexDirection: 'row',
    width: 'auto',

    '& > *': {
      margin: '0 0.2rem',
    },
  }


  return (
    <Box sx={container}>

      <TextField 
        label="Enter note" 
        variant="outlined"  
        autoComplete="off"
        value={inputValue}
        onChange={handleInputChange}
      />

      <Button 
        variant="outlined"
        onClick={() => updatePosts()}
      >
        Create
      </Button>

    </Box>
  );
}

export default InputComponent;