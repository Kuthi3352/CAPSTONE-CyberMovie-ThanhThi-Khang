
// import { useEffect } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { RootState, useAppDispatch } from "store";
import { ThongTinPhimThunk } from "store/Booking/thunk";
// import { DanhSachGheThunk } from "store/Booking/thunk";
// import { ThongTinLichChieuThunk } from "store/QuanLyRap/thunk";



export const BookingPageTemplate = () => {
  //tao moi truong 
  const dispatch = useAppDispatch()
  const { thongTinPhimRap } = useSelector(
    (state: RootState) => state.DanhSachPhongVe
  );
  const { lichchieuID } = useParams()

  //theo doi 
  console.log('thongTinPhimRap', thongTinPhimRap);


  //goi API 
  useEffect(() => {
    dispatch(ThongTinPhimThunk(lichchieuID))
  }, [dispatch, lichchieuID])



  return (
    <div className="w-4/5 m-auto mt-4">


    </div>
  )
}
