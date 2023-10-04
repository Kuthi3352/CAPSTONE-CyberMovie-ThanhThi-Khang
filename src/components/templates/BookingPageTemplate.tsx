// import { useEffect } from "react";
import { Button } from "components";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { RootState, useAppDispatch } from "store";
import { DanhSachPhongVeThunk } from "store/DanhSachPhongVe/thunk";
import { BookingAction, DatVeThunk } from "store/DatVe";
import styled from "styled-components";
import cln from "classnames";
import { DanhSachVe, DatVeType } from "types/DatVeType";

export const BookingPageTemplate = () => {
  const dispatch = useAppDispatch();
  const { DanhSachPhongVe } = useSelector(
    (state: RootState) => state.DanhSachPhongVe
  );

  const { lichchieuID } = useParams();
  const { chairBookings, chairBookeds } = useSelector(
    (state: RootState) => state.Booking
  );

  const payloadAPIDatVe: DatVeType = {
    maLichChieu: Number(lichchieuID),
    danhSachVe: [],
  };

  useEffect(() => {
    dispatch(DanhSachPhongVeThunk(lichchieuID));
  }, [dispatch, lichchieuID]);

  return (
    <ContainerBooking className="!flex no-header">
      <div className="w-3/6 mx-[40px] grid grid-cols-16 gap-4 mt-5">
        {DanhSachPhongVe?.danhSachGhe.map((ghe, index: number) => {
          return (
            <SoGhe
              key={index}
              className={cln(
                "ml-auto hover:bg-sky-700",
                "grid grid-cols-12 gap-2",
                {
                  booking: chairBookings.find(
                    (item) => item.tenGhe === ghe.tenGhe
                  ),
                  booked: chairBookeds.find(
                    (item) => item.tenGhe === ghe.tenGhe
                  ),
                }
              )}
              onClick={() => {
                dispatch(BookingAction.setChairBookings(ghe));
              }}
            >
              {ghe.tenGhe}
            </SoGhe>
          );
        })}
      </div>
      <div className="w-3/6 mt-5">
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
          <span className="!text-2xl text-red-500 ml-[30px]">
            {chairBookeds.reduce((total, ghe) => {
              return (total += ghe.giaVe);
            }, 0)}{" "}
            VND
          </span>
        </div>
        <Button
          className="w-4/6 mt-20 !text-3xl !font-medium !h-[60px] !bg-amber-500 !text-white"
          onClick={() => {
            dispatch(BookingAction.setChairBookeds());
            const bookingPayload: DanhSachVe[] = chairBookings?.map((item) => {
              return { maGhe: item.maGhe, giaVe: item.giaVe };
            });
            payloadAPIDatVe.danhSachVe = bookingPayload;
            dispatch(DatVeThunk(payloadAPIDatVe));
          }}
        >
          Đặt Vé
        </Button>
      </div>
    </ContainerBooking>
  );
};
const SoGhe = styled.div`
  width: 30px;
  height: 30px;
  line-height: 30px;
  font-size: 13px;
  text-align: center;
  font-weight: bold;
  border: transparent;
  display: inline-block;
  border-radius: 6px;
  background-color: gray;
  color: white;
  &.booking {
    background-color: orange !important;
    color: white;
    border: transparent;
  }

  &.booked {
    background-color: red !important;
    color: white;
    border: transparent;
    pointer-events: none;
  }
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
