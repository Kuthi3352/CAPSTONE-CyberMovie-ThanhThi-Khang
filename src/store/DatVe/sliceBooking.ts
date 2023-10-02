import { createSlice } from "@reduxjs/toolkit";
// import { DatVeType } from "types/DatVeType"
// import { DatVeThunk } from ".";

// type StateType = {
//     datVe?: DatVeType;
// }
const initialState ={ 
    chairBookings: [],
    chairBookeds: [],
}
const BookingSlice = createSlice({
    name: "DatVe",
    initialState,
    reducers: {
        setChairBookings:(state, action) => {
           
            const index = state.chairBookings.findIndex((item) => item.tenGhe === action.payload.tenGhe)
            if (index !== -1){
                state.chairBookings.splice(index, 1)
            }else{
                state.chairBookings.push(action.payload)
            }
        },
        setChairBookeds:(state) =>{
            state.chairBookeds = [...state.chairBookeds, ...state.chairBookings],
            state.chairBookings = []
        },
    },
    // extraReducers(builder){
    //     builder
    //     .addCase(DatVeThunk.fulfilled, (state, { payload}) => {
    //         state.datVe = payload
    //     })
    // }
})
export const {
    reducer: BookingReducer,
    actions: BookingAction,
} = BookingSlice

