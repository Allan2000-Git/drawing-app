import { menuItems, colors } from "@/utils/constants"
import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    [menuItems.Pencil]:{
        strokeColor: colors.BlacK,
        brushSize: 2
    },
    [menuItems.Eraser]:{
        strokeColor: colors.White,
        brushSize: 2
    }
}

export const toolboxSlice = createSlice({
    name: 'toolbox',
    initialState,
    reducers:{
        changeStrokeColor(state, action){
            state[action.payload.item].strokeColor = action.payload.strokeColor;
        },
        changeBrushSize(state, action){
            state[action.payload.item].brushSize = action.payload.brushSize;
        },
    }
})

export const {changeStrokeColor, changeBrushSize} = toolboxSlice.actions

export default toolboxSlice.reducer