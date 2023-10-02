import { createSlice } from "@reduxjs/toolkit";
import { Banner } from "types/BannerObjectType";
import { BannerThunk, DanhSachPhimThunk } from "./thunk";
import { ThongTinPhim } from "types/DanhSachPhimType";

type StateType = {
  bannerList?: Banner[];
  listPhim?: ThongTinPhim[];
  listSearch?: ThongTinPhim[];
};

const initialState: StateType = {
  listSearch: undefined,
};

const QuanLyPhimSlice = createSlice({
  name: "QuanLyPhim",
  initialState,
  reducers: {
    searchlist: (state, { payload }) => {
      console.log(payload);
      state.listSearch = payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(BannerThunk.fulfilled, (state, { payload }) => {
        state.bannerList = payload;
      })
      .addCase(DanhSachPhimThunk.fulfilled, (state, { payload }) => {
        state.listPhim = payload;
      });
  },
});

export const {
  actions: QuanLyPhimSliceActions,
  reducer: QuanLyPhimSliceReducer,
} = QuanLyPhimSlice;
