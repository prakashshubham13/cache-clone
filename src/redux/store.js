import {configureStore} from '@reduxjs/toolkit';
import {setupListeners} from '@reduxjs/toolkit/query';
import cachetSlice from './cachetSlice';

export const store = configureStore({
    reducer:{
        cachet: cachetSlice
    }
});
setupListeners(store.dispatch);
