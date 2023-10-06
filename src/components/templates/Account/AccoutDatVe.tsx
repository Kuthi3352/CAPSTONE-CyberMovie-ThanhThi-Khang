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
  console.log("use", userLogin2.thongTinDatVe);

  useEffect(() => {
    dispatch(checkLoginThunk());
  }, [dispatch]);
  return <div>
    {
      userLogin2.thongTinDatVe.map((item, index) => {
        return <ThongTinDatVeTab key={index}
                 className="s:!p-0 mdM:p-[10px] lgM:!w-[100%] >
          <div className="datve-content">
            <h1 className="italic text-red-500 text-2xl font-bold xs:!text-8 s:text-14 mdM:text-xl" >{item.tenPhim}</h1>
            <p className="pt-5 font-500 xs:text-8 xs:!pt-0">Ngày đặt: {item.ngayDat.slice(0, 10)}</p>
            <p className="pb-3">Giá vé: <span className="italic font-bold">{item.giaVe.toLocaleString()}</span> VND</p>
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
                {
                  item.danhSachGhe.map((veDat, index) => {
                    return <tr key={index}>
                      <td className="text-center">{index + 1}</td>
                      <td className="text-center">{veDat.tenHeThongRap}</td>
                      <td className="text-center">{veDat.tenRap}</td>
                      <td className="text-center">{veDat.tenGhe}</td>
                    </tr>
                  })
                }
              </tbody>
            </table>
          </div>
        </ThongTinDatVeTab>
      })
    }
  </div>;
};

const ThongTinDatVeTab = styled.div`
  width: 80%;
  padding: 20px;
  border: 1px solid #706f6f49;
  border-radius: 6px;
  margin-bottom: 6px;
`;
