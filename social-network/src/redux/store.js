import {configureStore} from "@reduxjs/toolkit";
import {usersSlice} from "./usersSlice";

export const store = configureStore({
    reducer:{
        users: usersSlice
    },
    middleware:[],
    devTools:process.env.NOD_ENV !== 'production',
})
