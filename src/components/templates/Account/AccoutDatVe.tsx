import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "store";
import { useEffect } from "react";
import { checkLoginThunk } from "store/QuanLyNguoiDung/thunk";
import styled from "styled-components";

export const AccoutDatVe = () => {
  const dispatch = useAppDispatch();
  const { userLogin2 } = useSelector(
    (state: RootState) => state.QuanLyNguoiDung
  );

  useEffect(() => {
    dispatch(checkLoginThunk());
  }, [dispatch]);
  return (
    <div>
      {userLogin2.thongTinDatVe.map((item, index) => {
        return (
          <ThongTinDatVeTab key={index}>
            <div className="datve-content">
              <h1 className="italic text-2xl font-bold">{item.tenPhim}</h1>
              <p className="pt-5">Ngày đặt: {item.ngayDat.slice(0, 10)}</p>
              <p className="pb-3">
                Giá vé:{" "}
                <span className="italic font-bold">
                  {item.giaVe.toLocaleString()}
                </span>{" "}
                VND
              </p>
              <table className="table w-full border">
                <thead className="border bg-lime-300">
                  <tr>
                    <th>STT</th>
                    <th>Hệ thống rạp</th>
                    <th>Tên rạp</th>
                    <th>Tên ghế </th>
                  </tr>
                </thead>
                <tbody>
                  {item.danhSachGhe.map((veDat, index) => {
                    return (
                      <tr key={index}>
                        <td className="text-center">{index + 1}</td>
                        <td className="text-center">{veDat.tenHeThongRap}</td>
                        <td className="text-center">{veDat.tenRap}</td>
                        <td className="text-center">{veDat.tenGhe}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </ThongTinDatVeTab>
        );
      })}
    </div>
  );
};

const ThongTinDatVeTab = styled.div`
  width: 100%;
  padding: 20px;
  border: 1px solid #706f6f49;
  border-radius: 6px;
  margin-bottom: 6px;
`;
