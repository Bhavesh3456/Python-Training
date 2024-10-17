import { configureStore } from "@reduxjs/toolkit";
import usereducer from './reducer'
export const store=configureStore({
    reducer:{
        proper:usereducer
    }
})