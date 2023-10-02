import { createAsyncThunk } from "@reduxjs/toolkit";
import { DatVeServices } from "services/DatVe";
import { DatVeType } from "types/DatVeType";

export const DatVeThunk = createAsyncThunk(
    "DatVe1",
    async(payload: DatVeType,{rejectWithValue}) => {
        try {
            const data = await DatVeServices.datVe(payload);
            console.log(data);
            
            // return data.data.content;
        }catch (err) {
            return rejectWithValue(err)
        }
    }
)