import { configureStore } from "@reduxjs/toolkit";
import { RootReducer } from "./RootReducer";
import { useDispatch } from "react-redux";
import { checkLoginThunk } from "./QuanLyNguoiDung/thunk";

export const store = configureStore({
  reducer: RootReducer,
});


store.dispatch(checkLoginThunk())
type AppDispatch = (typeof store)["dispatch"];
export const useAppDispatch: () => AppDispatch = useDispatch;

export type RootState = ReturnType<(typeof store)['getState']>