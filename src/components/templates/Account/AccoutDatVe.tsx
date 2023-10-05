import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "store";
import { useEffect } from "react";
import { checkLoginThunk } from "store/QuanLyNguoiDung/thunk";

export const AccoutDatVe = () => {
  const dispatch = useAppDispatch();
  const { userLogin } = useSelector(
    (state: RootState) => state.QuanLyNguoiDung
  );
  console.log("use", userLogin);

  useEffect(() => {
    dispatch(checkLoginThunk());
  }, [dispatch]);
  return <div>
    <form>
      {/* {
        thongTinVe.thongTinDatVe.map((ve) => {
          return <div>{ve.tenGhe}</div>
        })
      } */}
    </form>
  </div>;
};
