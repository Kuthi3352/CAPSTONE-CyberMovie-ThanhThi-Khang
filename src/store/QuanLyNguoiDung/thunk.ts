import { createAsyncThunk } from "@reduxjs/toolkit";
import { LoginSchemaType } from "schemas/LoginSchema";
import { QuanLyNguoiDungServices } from "services/QuanLyNguoiDung";
import { getAccessToken } from "utils";

export const loginThunk = createAsyncThunk(
  "QuanLyNguoiDung/login",
  async (payload: LoginSchemaType, { rejectWithValue }) => {
    try {
      const data = await QuanLyNguoiDungServices.login(payload);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      return data.data.content;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const checkLoginThunk = createAsyncThunk(
  "QuanLyNguoiDung/getLogin",
  async (_, { rejectWithValue }) => {
    const accessToken = getAccessToken();
    if (accessToken) {
      try {
        const data = await QuanLyNguoiDungServices.getUserLogin();
        return data.data.content;
      } catch (err) {
        return rejectWithValue(err);
      }
    }
  }
);
