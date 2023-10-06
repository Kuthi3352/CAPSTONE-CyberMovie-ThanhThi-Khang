import { combineReducers } from "@reduxjs/toolkit";
import { QuanLyNguoiDungReducers } from "./QuanLyNguoiDung";
import { QuanLyPhimSliceReducer } from "./QuanLyPhim";
import { QuanLyRapReducer } from "./QuanLyRap";
import { DanhSachPhongVeSliceReducer } from "./DanhSachPhongVe";
import { UpdateUserReducer } from "./CapNhatUser";
import { BookingReducer, DatVeReducer } from "./DatVe";



export const RootReducer = combineReducers({
  QuanLyNguoiDung: QuanLyNguoiDungReducers,
  QuanLyPhim: QuanLyPhimSliceReducer,
  QuanLyRap:QuanLyRapReducer,
  DanhSachPhongVe: DanhSachPhongVeSliceReducer,
  updateUser: UpdateUserReducer,
  Booking :BookingReducer,
  DatVe: DatVeReducer,
});
