import React, {useState} from 'react';

import {useSelector} from 'react-redux'

import { Box, IconButton  } from '@mui/material';
import { appSelector, editPost, removePost, removeTag } from '../../store/appSlice/appSlice';


import {useDispatch} from 'react-redux';

import CloseIcon from '@mui/icons-material/Close'; 
import EditIcon from '@mui/icons-material/Edit';
import CancelIcon from '@mui/icons-material/Cancel';
import DoneIcon from '@mui/icons-material/Done'

import { centeredDiv } from '../../StylesConstants/StylesConstants';
import { checkPostOnTag } from '../../utils/functions/functions';

const PostsComponent = () => {
  const [editedIndex, setEditedIndex] = useState<number>(-1);
  const [editedPost, setEditedPost] = useState<string>('');
  const {posts, tags, filters} = useSelector(appSelector);
  
  const dispatch = useDispatch()

  const handleRemovePost = (index: number, item: string) => {
    const postArr = item.split(' ');
    dispatch(removeTag(checkPostOnTag(postArr)));
    dispatch(removePost(index));
  };

  const handleEditPost = (index: number) => {
    setEditedIndex(index);
    setEditedPost(posts[index]);
  }

  const handleSaveChanges = (index: number) => {
    dispatch(editPost({index, editedPost}))

    setEditedIndex(-1);
    setEditedPost('');
  };

  const isTag = (word: string) => {
    return word.startsWith('#');
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

  const filteredPosts = posts.filter((post) => {
    const postWords = post.split(' ');
    return filters.every((filter) => postWords.includes(filter));
  });

  return (
    <>
        <Box>
          <h3>Tags:</h3>
          {tags.map((tag, index) => (
            <span key={tag + index} style={{ marginRight: '0.25rem', color: 'blue' }}>
              {tag}
            </span>
          ))}
        </Box>
       {filteredPosts?.map((item, index) => {
          const words = item.split(' ');
          return (
          <Box key={item + index} sx={post}>
            {editedIndex === index ? (
              <>
                <Box>{`${index + 1}.`}</Box>
                  <Box>
                    <input
                      type="text"
                      value={editedPost}
                      onChange={(e) => setEditedPost(e.target.value)}
                    />
                     <IconButton onClick={() => handleSaveChanges(index)}>
                      <DoneIcon />
                    </IconButton>
                  </Box>
                  <Box>
                    <IconButton onClick={() => setEditedIndex(-1)}>
                      <CancelIcon />
                    </IconButton>
                  </Box>
              </>
            ) : (
              <>
              <Box>{`${index + 1}.`}</Box>
              <Box>
                  {words.map((word, wordIndex) => {
                    return (
                      <span key={word + wordIndex} style={{ marginRight: '0.25rem', color: isTag(word) ? 'blue' : 'black' }}>
                        {word}
                      </span>
                    )

                })}
                </Box>
                <Box>
                  <IconButton onClick={() => handleRemovePost(index, item)}>
                    <CloseIcon />
                  </IconButton>
                  <IconButton onClick={() => handleEditPost(index)}>
                    <EditIcon />
                  </IconButton>
                </Box>
              </>
            )
          
          }
          </Box>
       )}   
      )}
    </>
  )
};

export default PostsComponent;