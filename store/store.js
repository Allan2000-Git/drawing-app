import menuBarSlice from "@/slice/menuBarSlice"
import toolBoxSlice from "@/slice/toolBoxSlice"
import {configureStore} from "@reduxjs/toolkit"

export const store = configureStore({
    reducer:{
        menu: menuBarSlice,
        toolbox: toolBoxSlice
    }
})