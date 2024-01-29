import { menuItems } from "@/utils/constants"
import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    activeMenuItem: menuItems.Pencil,
    actionMenuItem: null,
}

export const menuBarSlice = createSlice({
    name: 'menu',
    initialState,
    reducers:{
        activeMenuItemClick(state, action){
            state.activeMenuItem = action.payload;
        },
        actionMenuItemClick(state, action){
            state.actionMenuItem = action.payload;
        },
    }
})

export const {activeMenuItemClick, actionMenuItemClick} = menuBarSlice.actions

export default menuBarSlice.reducer