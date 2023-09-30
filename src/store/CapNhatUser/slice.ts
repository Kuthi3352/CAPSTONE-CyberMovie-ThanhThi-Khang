import { createSlice } from "@reduxjs/toolkit"
import { UpdateUser } from "types"
import { UpdateUserThunk  } from "./thunk"

type CapNhatUserInitialState = {
    updateUser?: UpdateUser[]
    isFetchingUpdateUser?: boolean
}
const initialState: CapNhatUserInitialState = {}
const UpdateUserSlice = createSlice({
    name: 'updateUser',
    initialState,
    reducers: {},
    extraReducers(builder){
        builder
        .addCase(UpdateUserThunk.pending, (state) => {
            state.isFetchingUpdateUser = true
        })
        .addCase(UpdateUserThunk.fulfilled, (state, {payload}) => {
            state.updateUser = payload
            state.isFetchingUpdateUser = false
        }) 
        .addCase(UpdateUserThunk.rejected, (state) => {
            state.isFetchingUpdateUser = false
        })
    }
})
export const {actions: UpdateUserAction, reducer: UpdateUserReducer} = UpdateUserSlice