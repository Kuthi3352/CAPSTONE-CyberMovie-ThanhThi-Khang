import { createSlice } from "@reduxjs/toolkit";
import { ThongTinPhimThunk } from "./thunk";
import { DanhSachPhongVe } from "types";

type PhongVeType = {
    danhSachPhongVe?: DanhSachPhongVe;
   
}
const initialState: PhongVeType = {

};

const DanhSachPhongVeSlice = createSlice({
    name: "DanhSachPhongVe",
    initialState,
    reducers: {},
    extraReducers(builder){
        builder
        .addCase(ThongTinPhimThunk.fulfilled, (state, {payload}) => {
            state.danhSachPhongVe = payload;
        })
    //     .addCase(DanhSachGheThunk.fulfilled,(state, {payload}) =>{
    // vscode-file://vscode-app/c:/Users/Khang%20Nguyen/AppData/Local/Programs/Microsoft%20VS%20Code/resources/app/out/vs/code/electron-sandbox/workbench/workbench.html        state.danhSachGhe = payload;
    //     })
       
    }
})
export const {
    actions: DanhSachPhongVeSliceAction,
    reducer: DanhSachPhongVeSliceReducer,
} = DanhSachPhongVeSlice;