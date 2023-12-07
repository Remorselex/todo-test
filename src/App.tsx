import React from 'react';

import { Box } from '@mui/material';

import InputComponent from './components/Input/Input';

import { centeredDiv } from './StylesConstants/StylesConstants';
import PostsComponent from './components/posts/Posts';

function App() {

  const container = {
    ...centeredDiv,
    margin: '0 10rem',
    flexDirection: 'column',
    height: '100dvh',
  }
  
  return (
    <Box sx={container}>
      <InputComponent />
      <PostsComponent />
    </Box>
  );
}

export default App;
