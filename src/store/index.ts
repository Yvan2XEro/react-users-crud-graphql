import { configureStore } from '@reduxjs/toolkit';
import { reducer as formReducer } from 'redux-form'
import usersReducer from './slices/usersSlice';


const store = configureStore({
    reducer: {
        form: formReducer,
        users: usersReducer
    },
    devTools: true
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
