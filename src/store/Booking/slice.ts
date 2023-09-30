import { createSlice } from "@reduxjs/toolkit";

import { DanhSachGhe,  ThongTinPhimRap} from "types/DanhSachPhongVe";
import { DanhSachGheThunk, ThongTinPhimThunk } from "./thunk";

type PhongVeType = {
    thongTinPhimRap?: ThongTinPhimRap[];
    danhSachGhe?: DanhSachGhe[];
   

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
            state.thongTinPhimRap = payload;
        })
        .addCase(DanhSachGheThunk.fulfilled,(state, {payload}) =>{
            state.danhSachGhe = payload;
        })
       
    }
})
export const {
    actions: DanhSachPhongVeSliceAction,
    reducer: DanhSachPhongVeSliceReducer,
} = DanhSachPhongVeSlice;