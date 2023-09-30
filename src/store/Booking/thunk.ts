import { createAsyncThunk } from "@reduxjs/toolkit";
import { DanhSachPhongVeServices } from "services/Booking";
export const ThongTinPhimThunk = createAsyncThunk(
    "QuanLyDatVe/ThongTinPhimRap",
    async(query: string, {rejectWithValue}) => {
        try {
            const data = await DanhSachPhongVeServices.ThongTinPhimRap(query);
            console.log('data', data);
            console.log(data.data.content);
            return data.data.content;
          
            

        }catch(err){
            return rejectWithValue(err);
        }
    }
);
export const DanhSachGheThunk = createAsyncThunk(
    "QuanLyDatVe/DanhSachGhe",
    async(query: string, {rejectWithValue}) => {
        try {
            const data = await DanhSachPhongVeServices.DanhSachGhe(query);
            console.log('data', data);
            return data.data.content;
          

        }catch(err){
            return rejectWithValue(err);
        }
    }
);
