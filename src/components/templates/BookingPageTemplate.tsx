import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { RootState, useAppDispatch } from "store";
import { DanhSachPhongVeThunk } from "store/DanhSachPhongVe/thunk";
import styled from "styled-components";



export const BookingPageTemplate = () => {
  const dispatch = useAppDispatch()
  const { lichchieuID } = useParams()
  const { DanhSachPhongVe } = useSelector(
    (state: RootState) => state.DanhSachPhongVe
  );

  useEffect(() => {
    dispatch(DanhSachPhongVeThunk(lichchieuID));
  }, [dispatch, lichchieuID]);

  return (
    <Container>
      <h1 className="text-center text-3xl mt-5 font-bold">{DanhSachPhongVe?.thongTinPhim?.tenPhim}</h1>
      <div className="flex w-3/4 m-auto gap-5 mt-20">
        <img src={DanhSachPhongVe?.thongTinPhim?.hinhAnh} alt="" className="w-1/6  " />
        <div className="">
          <p><span className="italic font-semibold">Suất chiếu:</span>  {DanhSachPhongVe?.thongTinPhim?.gioChieu} - {DanhSachPhongVe?.thongTinPhim?.ngayChieu}</p>
        </div>
      </div>
    </Container>
  )
}


const Container = styled.div`
  width: 80%;
  margin: auto;
`
