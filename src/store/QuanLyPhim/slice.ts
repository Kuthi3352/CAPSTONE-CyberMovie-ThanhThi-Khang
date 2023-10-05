import { createSlice } from "@reduxjs/toolkit";
import { Banner } from "types/BannerObjectType";
import { BannerThunk, DanhSachPhimThunk } from "./thunk";
import { ThongTinPhim } from "types/DanhSachPhimType";

type StateType = {
  bannerList?: Banner[];
  listPhim?: ThongTinPhim[];
  listSearch?: ThongTinPhim[];
  isFetchingMovieList?: boolean
};

const initialState: StateType = {
  listSearch: undefined,
};

const QuanLyPhimSlice = createSlice({
  name: "QuanLyPhim",
  initialState,
  reducers: {
    searchlist: (state, { payload }) => {
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
        state.isFetchingMovieList = false
      })
      .addCase(DanhSachPhimThunk.pending, (state) => {
        state.isFetchingMovieList = true
    })
    .addCase(DanhSachPhimThunk.rejected, (state) => {
      state.isFetchingMovieList = false
  })
  }
});

export const {
  actions: QuanLyPhimSliceActions,
  reducer: QuanLyPhimSliceReducer,
} = QuanLyPhimSlice;
