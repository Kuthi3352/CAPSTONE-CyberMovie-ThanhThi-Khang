import { createAsyncThunk } from "@reduxjs/toolkit";
import { DanhSachPhongVeServices } from "services/Booking";

export const DanhSachPhongVeThunk = createAsyncThunk(
    "QuanLyDatVe/DanhSachPhongVe",
    async(query: string, {rejectWithValue}) => {
        try {
            const data = await DanhSachPhongVeServices.DanhSachPhongVe(query);
           
            return data.data.content;
          

        }catch(err){
            return rejectWithValue(err);
        }
    }
);

