// import { useEffect } from "react";
import { Button, Skeleton } from "components";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { RootState, useAppDispatch } from "store";
import { DanhSachPhongVeThunk } from "store/DanhSachPhongVe";
import { BookingAction, DatVeThunk } from "store/DatVe";
import styled from "styled-components";
import cln from "classnames";
import { DanhSachVe, DatVeType } from "types";

export const BookingPageTemplate = () => {
  const dispatch = useAppDispatch();
  const { DanhSachPhongVe } = useSelector(
    (state: RootState) => state.DanhSachPhongVe
  );
  const { isFetchingMovieList } = useSelector(
    (state: RootState) => state.QuanLyPhim
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
  if (isFetchingMovieList) {
    return (
      <div className="no-header">
        <Skeleton active className="!mt-48"></Skeleton>
      </div>
    );
  }
  return (
    <ContainerBooking className="no-header">
      <div className="xl:w-3/6 lg:mx-[40px] grid grid-cols-16 gap-4 mt-5 ">
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
                  vip: ghe.loaiGhe === "Vip",
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
      <div className="w-3/6 mt-5 content s:ml-[48px]">
        <div className="flex s:block">
          <div className="w-[40%] md:w-[33%] s:w-[80%] s:ml-[40px]">
            <img
              src={DanhSachPhongVe?.thongTinPhim.hinhAnh}
              className="rounded-lg"
            />
          </div>
          <div className="content_text s:!ml-[35px]">
            <div className="text-3xl font-bold ml-[30px] tenphim">
              {DanhSachPhongVe?.thongTinPhim.tenPhim}
            </div>
            <div className="text-1xl font-medium ml-[30px] mt-[20px] noidung">
              Cụm Rạp:{" "}
              <span className="text-green-500">
                {DanhSachPhongVe?.thongTinPhim.tenCumRap}
              </span>
            </div>
            <div className="text-1xl font-medium ml-[30px] mt-[20px] noidung">
              Tên Rạp:{" "}
              <span className="text-green-500">
                {DanhSachPhongVe?.thongTinPhim.tenRap}
              </span>
            </div>
            <div className="text-1xl font-medium ml-[30px] mt-[20px] noidung">
              Ngày giờ chiếu:{" "}
              <span className="text-green-500">
                {DanhSachPhongVe?.thongTinPhim.ngayChieu}
              </span>
              -
              <span className="text-green-500">
                {DanhSachPhongVe?.thongTinPhim.gioChieu}
              </span>
            </div>
            <div className="text-1xl font-medium ml-[30px] mt-[20px] noidung">
              Địa chỉ:{" "}
              <span className="text-green-500">
                {DanhSachPhongVe?.thongTinPhim.diaChi}
              </span>
            </div>
            <div className="flex gap-[20px] ml-[25px] mt-[40px] OGhe">
              <div>
                <SoGhe className="ml-20 o"></SoGhe>
                <p className="font-medium">Còn Trống</p>
              </div>
              <div>
                <SoGhe className="!bg-orange-500 ml-20 o"></SoGhe>
                <p className="font-medium">Đang chọn</p>
              </div>
              <div>
                <SoGhe className="!bg-red-500 ml-20 o"></SoGhe>
                <p className="font-medium">Ghế đã bán</p>
              </div>
              <div>
                <SoGhe className="!bg-cyan-400 ml-10 o"></SoGhe>
                <p className="font-medium">Ghế Vip</p>
              </div>
            </div>
          </div>
        </div>
        <div></div>
        <div className="s:ml-[40px]">
          <div className="text-3xl font-bold !mt-20 thanhTien">
            Thành tiền:{" "}
            <span className="!text-2xl text-red-500 ml-[30px] s:!text-base s:!ml-[10px]">
              {chairBookings.reduce((total, ghe) => {
                return (total += ghe.giaVe);
              }, 0)}{" "}
              VND
            </span>
          </div>
          <Button
            className="w-full !mt-20 sm:!text-xl lg:!text-3xl !font-medium sm:!h-[40px] lg:!h-[60px] !bg-amber-500 !text-white "
            onClick={() => {
              dispatch(BookingAction.setChairBookeds());
              const bookingPayload: DanhSachVe[] = chairBookings?.map(
                (item) => {
                  return { maGhe: item.maGhe, giaVe: item.giaVe };
                }
              );
              payloadAPIDatVe.danhSachVe = bookingPayload;
              dispatch(DatVeThunk(payloadAPIDatVe));
            }}
          >
            Đặt Vé
          </Button>
        </div>
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
    background-color: rgb(249, 115, 22) !important;
    color: white;
    border: transparent;
  }
  &.booked {
    background-color: rgb(239, 68, 68) !important;
    color: white;
    border: transparent;
    pointer-events: none;
  }
  &.vip {
    background-color: #22d3ee;
  }
  @media (max-width: 1339px) {
    width: 25px;
    height: 25px;
    line-height: 25px;
    font-size: 12px;
    font-weight: 500;
  }
  @media (max-width: 512px) {
    width: 17px;
    height: 17px;
    line-height: 17px;
    font-size: 8px;
    font-weight: 500;
  }
`;

const ContainerBooking = styled.div`
  display: flex;
  width: 80%;
  margin: auto;
  @media (max-width: 1532px) {
    .OGhe,
    .noidung {
      font-size: 14px;
    }
    .tenphim {
      font-size: 25px;
    }
  }
  @media (max-width: 1395px) {
    .OGhe,
    .noidung {
      margin-left: 10px;
    }
    .tenphim {
      font-size: 20px;
      margin-left: 10px;
      margin-top: 0px !important;
    }
    .thanhTien {
      font-size: 25px;
      margin-top: 30px;
    }
  }
  @media (max-width: 1339px) {
    .noidung,
    .tenphim {
      margin-top: 10px;
    }
    .OGhe {
      margin-top: 10px;
      font-size: 12px;
      .o {
        margin-left: 10px;
      }
    }
  }
  @media (max-width: 1141px) {
    display: block !important;
    .content {
      width: 80%;
      margin-left: 20px;
      margin-top: 30px;
    }
    .OGhe {
      font-size: 15px;
    }
    .noidung {
      font-size: 20px;
    }
    .tenphim,
    .thanhTien {
      font-size: 30px;
    }
    .content_text {
      margin-left: 30px;
    }
  }
  @media (max-width: 1004px) {
    .noidung {
      font-size: 16px;
    }
    .OGhe {
      font-size: 12px;
    }
  }
  @media (max-width: 820px) {
    .tenphim,
    .thanhTien {
      font-size: 20px;
    }
    .noidung {
      font-size: 14px;
    }
    .OGhe {
      font-size: 10px;
    }
  }
  @media (max-width: 723px) {
    content_img {
      width: 40% !important;
    }
    .content_text {
      margin-left: 10px;
    }
  }
  @media (max-width: 649px) {
    .tenphim,
    .thanhTien {
      font-size: 17px;
    }
    .noidung {
      font-size: 12px;
    }
    .OGhe {
      font-size: 8px;
    }
    .o {
      margin-left: 0px !important;
    }
  }
  @media (max-width: 397px) {
    .thanhTien {
      font-size: 15px !important;
      span {
        font-size: 12px !important;
      }
    }
  }
`;
