import menuBarSlice from "@/slice/menuBarSlice"
import {configureStore} from "@reduxjs/toolkit"

export const store = configureStore({
    reducer:{
        menu: menuBarSlice
    }
})