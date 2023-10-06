import { createAsyncThunk } from "@reduxjs/toolkit";
import { DatVeServices } from "services";
import { DatVeType } from "types";

export const DatVeThunk = createAsyncThunk(
    "DatVe",
    async(payload: DatVeType,{rejectWithValue}) => {
        try {
            const data = await DatVeServices.datVe(payload);
            console.log('thanh cmn cong cong');
            
            return data.data.content;
        }catch (err) {
            return rejectWithValue(err)
        }
    }
)