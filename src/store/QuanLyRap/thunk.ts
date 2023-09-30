import { createAsyncThunk } from "@reduxjs/toolkit";
import { QuanLyRapServices } from "services/QuanLyRap";

export const HeThongRapThunk = createAsyncThunk(
  "QuanLyRap/he-thong-rap",
  async (_, { rejectWithValue }) => {
    try {
      const data = await QuanLyRapServices.heThongRap();
      return data.data.content;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const CumRapThunk = createAsyncThunk(
  "QuanLyRap/cum-rap",
  async (query: string, { rejectWithValue }) => {
    try {
      const data = await QuanLyRapServices.cumRap(query);
      return data.data.content;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const ThongTinLichChieuThunk = createAsyncThunk(
  "QuanLyRap/thong-tin-lich-chieu",
  async (_, { rejectWithValue }) => {
    try {
      const data = await QuanLyRapServices.thongTinLichChieu();
      return data.data.content;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
