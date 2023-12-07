import { createSlice } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

import { RootState } from '../store';

interface AppState {
  postQuery: undefined | string,
  posts: string[],
}

const initialState: AppState = {
  postQuery: '',
  posts: [],
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
      state.posts = state.posts.filter((item) => item !== action.payload)
    }
  }
})

const persistedAppSlice = persistReducer(persistConfig, appSlice.reducer);

export const {
  setQuery,
  setPost,
  removePost
} = appSlice.actions;

export const appSelector = (state: RootState) => state.app;

export default persistedAppSlice;