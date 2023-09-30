import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { UserLogin, getUserLoginType } from "types/UserLoginType";
import { checkLoginThunk, loginThunk } from "./thunk";
import { getAccessToken } from "utils";
type StateType = {
  accessToken?: string;
  userLogin?: UserLogin | getUserLoginType;
  isFetchingLogin?: boolean
};
const initialState: StateType = {
  accessToken: getAccessToken(),
  isFetchingLogin: false,
};

const quanLyNguoiDungSlice = createSlice({
  name: "QuanLyNguoiDung",
  initialState,
  reducers: {
    logOut: (state, action: PayloadAction<string>) => {
      console.log(action);
      
      state.accessToken = undefined;
      state.userLogin = undefined;
      localStorage.removeItem("ACCESSTOKEN");
    },
  },
  extraReducers(builder) {
    builder
    .addCase(loginThunk.pending, (state) => {
      state.isFetchingLogin = true
  })
  .addCase(loginThunk.rejected, (state) => {
      state.isFetchingLogin = false
  })
      .addCase(loginThunk.fulfilled, (state, { payload }) => {
        localStorage.setItem("ACCESSTOKEN", payload.accessToken)
        
        state.accessToken = payload.accessToken;
        state.userLogin = payload;
        state.isFetchingLogin = false;
      })
      .addCase(checkLoginThunk.fulfilled, (state, { payload }) => {
        state.userLogin = payload;
      });
  },
});

export const {
  reducer: QuanLyNguoiDungReducers,
  actions: QuanLyNguoiDungActions,
} = quanLyNguoiDungSlice;
