import { createSlice } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

import { RootState } from '../store';

interface AppState {
  postQuery: undefined | string,
  posts: string[],
  tags: string[]
}

const initialState: AppState = {
  postQuery: '',
  posts: [],
  tags: [],
}

const persistConfig = {
  key: 'app',
  storage: storage,
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setQuery(state, action) {
      state.postQuery = action.payload
    },
    setPost(state, action) {
      state.posts = [...state.posts, action.payload];
    },
    removePost(state, action) {
      state.posts = state.posts.filter((_, index) => index !== action.payload)
    },
    editPost(state, action) {
      const { index, editedPost } = action.payload;
      state.posts[index] = editedPost;
    },
    addTag(state, action) {
      const tagsToAdd = Array.isArray(action.payload) ? action.payload : [action.payload];
      const uniqueTagsToAdd = tagsToAdd.filter(tag => !state.tags.includes(tag));
      state.tags = [...state.tags, ...uniqueTagsToAdd];
    },
    removeTag(state, action) {
      const tagsToRemove = Array.isArray(action.payload) ? action.payload : [action.payload];
      state.tags = state.tags.filter((currentTag) => !tagsToRemove.includes(currentTag));
    },
    filterByTag(state, action) {

    }
  }
})

const persistedAppSlice = persistReducer(persistConfig, appSlice.reducer);

export const {
  setQuery,
  setPost,
  removePost,
  editPost,
  addTag,
  removeTag,
  filterByTag
} = appSlice.actions;

export const appSelector = (state: RootState) => state.app;

export default persistedAppSlice;