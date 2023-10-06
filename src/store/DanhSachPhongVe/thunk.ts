import { createAsyncThunk } from "@reduxjs/toolkit";
import { DanhSachPhongVeServices } from "services";

export const DanhSachPhongVeThunk = createAsyncThunk(
    "QuanLyDatVe/DanhSachPhongVe",
    async(query: string, {rejectWithValue}) => {
        try {
            const data = await DanhSachPhongVeServices.ThongTinPhimRap(query);
           
            return data.data.content;
          

        }catch(err){
            return rejectWithValue(err);
        }
    }
);

