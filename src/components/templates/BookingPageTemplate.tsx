// import { useEffect } from "react";
import { Button } from "components";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { RootState, useAppDispatch } from "store";
import { DanhSachPhongVeThunk } from "store/Booking/thunk";

import styled from "styled-components";

export const BookingPageTemplate = () => {
  const dispatch = useAppDispatch();
  const { DanhSachPhongVe } = useSelector(
    (state: RootState) => state.DanhSachPhongVe
  );
  const { lichchieuID } = useParams();

  console.log("PhongVe", DanhSachPhongVe);

  useEffect(() => {
    dispatch(DanhSachPhongVeThunk(lichchieuID));
  }, [dispatch, lichchieuID]);

  return (
    //   <ManHinh className="p-8 text-xl text-white text-center mb-12 ">
    //   Màn hình
    // </ManHinh>
    <ContainerBooking className="!flex !mt-20">
      <div className="grid grid-cols-16 grid-rows-10 w-3/6 mx-[40px] ">
        {DanhSachPhongVe?.danhSachGhe.map((ghe, index: number) => {
          return (
            <SoGhe key={index} className="ml-auto">
              {ghe.tenGhe}
            </SoGhe>
          );
        })}
      </div>
      <div className="w-3/6">
        <div className="flex">
          <div className="w-3/12">
            <img
              src={DanhSachPhongVe?.thongTinPhim.hinhAnh}
              className="rounded-lg"
            />
          </div>
          <div>
            <div className="text-3xl font-bold ml-[30px]">
              {DanhSachPhongVe?.thongTinPhim.tenPhim}
            </div>
            <div className="text-1xl font-medium ml-[30px] mt-[30px]">
              Cụm Rạp:{" "}
              <span className="text-green-500">
                {DanhSachPhongVe?.thongTinPhim.tenCumRap}
              </span>
            </div>
            <div className="text-1xl font-medium ml-[30px] mt-[30px]">
              Tên Rạp:{" "}
              <span className="text-green-500">
                {DanhSachPhongVe?.thongTinPhim.tenRap}
              </span>
            </div>
            <div className="text-1xl font-medium ml-[30px] mt-[30px]">
              Ngày giờ chiếu:{" "}
              <span className="text-green-500">
                {DanhSachPhongVe?.thongTinPhim.ngayChieu}
              </span>
              -
              <span className="text-green-500">
                {DanhSachPhongVe?.thongTinPhim.gioChieu}
              </span>
            </div>
            <div className="text-1xl font-medium ml-[30px] mt-[30px]">
              Địa chỉ:{" "}
              <span className="text-green-500">
                {DanhSachPhongVe?.thongTinPhim.diaChi}
              </span>
            </div>
          </div>
        </div>
        <div className="mt-[30px]">
          -------------------------------------------------------------------------------
        </div>
        <div className="text-3xl font-bold">
          Thành tiền:{" "}
          <span className="!text-2xl text-red-500 ml-[30px]">75000 VNĐ</span>
        </div>
        <Button className="w-4/6 mt-20 !text-3xl !font-medium !h-[60px] !bg-amber-500 !text-white">
          Đặt Vé
        </Button>
      </div>
    </ContainerBooking>
  );
};
const SoGhe = styled.div`
  width: 40px;
  height: 40px;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  border: 1px solid gray !important;
  display: flex;
  border-radius: 6px;
  background-color: gray;
  margin-bottom: 5px;
  color: white;
`;
// const ManHinh = styled.div`
//   background-color: gray;
//   border-top-left-radius: 100%;
//   border-top-right-radius: 100%;
//   box-shadow: 0 20px 20px 0px;
//   width: 49%;
//   margin: 30px 0px 0 40px;
// `;

const ContainerBooking = styled.div`
  width: 80%;
  margin: auto;
`;
