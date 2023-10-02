import { createSlice } from "@reduxjs/toolkit";

import {DanhSachPhongVe} from "types/DanhSachPhongVe";

import {  DanhSachPhongVeThunk} from "./thunk";


type PhongVeType = {

DanhSachPhongVe?: DanhSachPhongVe;
 

}
const initialState: PhongVeType = {

};

const DanhSachPhongVeSlice = createSlice({
    name: "DanhSachPhongVe",
    initialState,
    reducers: {},
    extraReducers(builder){
        builder
        .addCase(DanhSachPhongVeThunk.fulfilled,(state, {payload}) =>{
            state.DanhSachPhongVe = payload;
        })
       
       
    }
})
export const {
    actions: DanhSachPhongVeSliceAction,
    reducer: DanhSachPhongVeSliceReducer,
} = DanhSachPhongVeSlice;