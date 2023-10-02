import { combineReducers } from "@reduxjs/toolkit";
import { QuanLyNguoiDungReducers } from "./QuanLyNguoiDung/slice";
import { QuanLyPhimSliceReducer } from "./QuanLyPhim/slice";
import { QuanLyRapReducer } from "./QuanLyRap/slice";
import { DanhSachPhongVeSliceReducer } from "./DanhSachPhongVe/slice";
import { UpdateUserReducer } from "./CapNhatUser/slice";
import { BookingReducer } from "./DatVe";
import { DatVeReducer } from "./DatVe/slice";


export const RootReducer = combineReducers({
  QuanLyNguoiDung: QuanLyNguoiDungReducers,
  QuanLyPhim: QuanLyPhimSliceReducer,
  QuanLyRap:QuanLyRapReducer,
  DanhSachPhongVe: DanhSachPhongVeSliceReducer,
  updateUser: UpdateUserReducer,
  Booking :BookingReducer,
  DatVe: DatVeReducer,
});
