import { createAsyncThunk } from "@reduxjs/toolkit";
import { DanhSachPhongVeServices } from "services/Booking";


export const ThongTinPhimThunk = createAsyncThunk(
    "QuanLyDatVe/ThongTinPhimRap",
    async(query: string, {rejectWithValue}) => {
        try {
            const data = await DanhSachPhongVeServices.ThongTinPhimRap(query);
            return data.data.content;
            
        }catch(err){
            return rejectWithValue(err);
        }
    }
);

