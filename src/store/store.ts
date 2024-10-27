import { configureStore } from '@reduxjs/toolkit';
import verifyEmailReducer from './auth/verifyEmailSlice'
import naviMenuReducer from './Header/naviMenuSlice'
import getResetPasswordTokenReducer from './auth/getResetPasswordTokenSlice';
// Define the root state type
export type RootState = ReturnType<typeof store.getState>;

const store = configureStore({
  reducer: {
    email : verifyEmailReducer,
    token : getResetPasswordTokenReducer,
    naviMenu : naviMenuReducer
}});


export type AppDispatch = typeof store.dispatch;
export default store;
