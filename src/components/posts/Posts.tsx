import React from 'react';

import {useSelector} from 'react-redux'

import { Box, IconButton  } from '@mui/material';
import { appSelector, removePost } from '../../store/appSlice/appSlice';

import CloseIcon from '@mui/icons-material/Close';

import {useDispatch} from 'react-redux';

import { centeredDiv } from '../../StylesConstants/StylesConstants';

const PostsComponent = () => {
  const {posts} = useSelector(appSelector);
  
  const dispatch = useDispatch()

  const handleRemovePost = (item: string) => {
    dispatch(removePost(item));
  };


  const post = {
    ...centeredDiv,
    justifyContent: 'space-between',
    width: '100%',
    lineHeight: '20px',
    border: '1px solid black',
    borderRadius: 7,
    margin: '0.5rem',
    padding: '0.5rem'
  }
  return (
    <>
       {posts?.map((item, index) => (
          <Box key={item + index} sx={post}>
              <Box>{item}</Box>
              <IconButton onClick={() => handleRemovePost(item)}>
                <CloseIcon />
              </IconButton>
          </Box>
       )
      )}
    </>
  )
};

export default PostsComponent;