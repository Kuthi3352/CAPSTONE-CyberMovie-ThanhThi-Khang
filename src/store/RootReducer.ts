import { combineReducers } from "@reduxjs/toolkit";
import { QuanLyNguoiDungReducers } from "./QuanLyNguoiDung/slice";
import { QuanLyPhimSliceReducer } from "./QuanLyPhim/slice";
import { QuanLyRapReducer } from "./QuanLyRap/slice";
import { DanhSachPhongVeSliceReducer } from "./Booking/slice";
import { UpdateUserReducer } from "./CapNhatUser/slice";


export const RootReducer = combineReducers({
  QuanLyNguoiDung: QuanLyNguoiDungReducers,
  QuanLyPhim: QuanLyPhimSliceReducer,
  QuanLyRap:QuanLyRapReducer,
  DanhSachPhongVe: DanhSachPhongVeSliceReducer,
  updateUser: UpdateUserReducer,
});
