import { createSlice } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

import { RootState } from '../store';

interface AppState {
  postQuery: null | undefined | string,
  posts: null | undefined | string[],
}

const initialState: AppState = {
  postQuery: null,
  posts: [],
}

const persistConfig = {
  key: 'app',
  storage: storage,
  whitelist: ['token'],
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setQuery(state, action) {
      state.postQuery = action.payload
    }
  }
})

const persistedAppSlice = persistReducer(persistConfig, appSlice.reducer);

export const appSelector = (state: RootState) => state.app;

export default persistedAppSlice;