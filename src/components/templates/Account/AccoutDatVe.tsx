import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "store";
import { useEffect } from "react";
import { checkLoginThunk } from "store/QuanLyNguoiDung/thunk";

export const AccoutDatVe = () => {
  const dispatch = useAppDispatch();
  const { userLogin2 } = useSelector(
    (state: RootState) => state.QuanLyNguoiDung
  );
  console.log("use", userLogin2.thongTinDatVe);

  useEffect(() => {
    dispatch(checkLoginThunk());
  }, [dispatch]);
  return <div></div>;
};
