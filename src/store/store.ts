import { configureStore } from '@reduxjs/toolkit';
import superheroesReducer from './superheroesSlice';
import authReducer from './authSlice';

export const store = configureStore({
  reducer: {
    superheroes: superheroesReducer,
    auth: authReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;