import { DatVeType } from "types/DatVeType"

// import { DatVeThunk } from ".";
import { createSlice } from "@reduxjs/toolkit";


type StateType = {
    DatVe?: DatVeType;
}
const initialState: StateType = {
   
    
};
const DatVeSlice = createSlice({
    name: "DatVe",
    initialState,
    reducers: {},
    extraReducers(){
        
    }
})
export const {
    actions: DatVeAction,
    reducer: DatVeReducer,
} = DatVeSlice;
