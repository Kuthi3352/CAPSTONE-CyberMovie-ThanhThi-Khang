import { createSlice } from "@reduxjs/toolkit";
import {
  CumRapType,
  HeThongRapType,
  ThongTinLichChieuType,
} from "types/HeThongRapType";
import { CumRapThunk, HeThongRapThunk, ThongTinLichChieuThunk } from "./thunk";

type StateType = {
  heThongRap?: HeThongRapType[];
  cumRap?: CumRapType[];
  ThongTinLichChieu?: ThongTinLichChieuType[];
};

const initialState: StateType = {};

const QuanLyRapSlice = createSlice({
  name: "QuanLyRap",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(HeThongRapThunk.fulfilled, (state, { payload }) => {
        state.heThongRap = payload;
      })

      .addCase(CumRapThunk.fulfilled, (state, { payload }) => {
        state.cumRap = payload;
      })
      .addCase(ThongTinLichChieuThunk.fulfilled, (state, { payload }) => {
        state.ThongTinLichChieu = payload;
        
      });
  },
});

export const { reducer: QuanLyRapReducer, actions: QuanLyRapActions } =
  QuanLyRapSlice;
