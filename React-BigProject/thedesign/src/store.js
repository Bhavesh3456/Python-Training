import { configureStore } from "@reduxjs/toolkit";
import usingreduce from './reducer'
export const valuestore=configureStore({
    reducer:{
        user:usingreduce
    }
})