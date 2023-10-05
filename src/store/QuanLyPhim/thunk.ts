import { createAsyncThunk } from "@reduxjs/toolkit";
import { QuanLyPhimServices } from "services/QuanLyPhim";
import { sleep } from "utils";

export const BannerThunk = createAsyncThunk(
  "QuanLyPhim/banner",
  async (_, { rejectWithValue }) => {
    try {
      const data = await QuanLyPhimServices.banner();
      return data.data.content;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const DanhSachPhimThunk = createAsyncThunk(
  "QuanLyPhim/danhsach",
  async (payload: string, { rejectWithValue }) => {
    try {
      const data = await QuanLyPhimServices.danhSachPhim(payload);
      await sleep(2000)
      return data.data.content;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

// export const DetailPhim = createAsyncThunk(
//   "QuanLyPhim/danhsach",
//   async (payload: string, { rejectWithValue }) => {
//     try {
//       const data = await QuanLyPhimServices.danhSachPhim(maPhim);
//       return data.data.content;
//     } catch (err) {
//       return rejectWithValue(err);
//     }
//   }
// );



