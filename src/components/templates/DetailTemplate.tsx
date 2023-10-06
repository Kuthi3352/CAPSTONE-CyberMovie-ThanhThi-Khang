import { Button } from "antd";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import {  useParams } from "react-router-dom";
import { RootState, useAppDispatch } from "store";
import { DetailPhimThunk } from "store/QuanLyPhim";
import styled from "styled-components";

export const DetailTemplate = () => {
  const params = useParams();
  const dispatch = useAppDispatch()
  const { thongTinPhim } = useSelector((state: RootState) => state.QuanLyPhim);
  
  useEffect(() => {
    dispatch(DetailPhimThunk(params.movieID))
  }, [dispatch, params.movieID])
  return (
    <Detail>
      <div className="!w-4/5 m-auto px-4" key={thongTinPhim?.maPhim}>
        <div className="flex justify-center mt-20 Detail_body">
          <div className="bg-autow w-[25%] Detail_Img">
            <img
              src={thongTinPhim?.hinhAnh}
              className="max-h-[500px] max-w-xs mr-[30px] "
            />
          </div>
          <div className="w-[40%] Detail_content ">
            <h1 className="text-3xl font-bold !text-red-500">
              {thongTinPhim?.tenPhim}
            </h1>
            <p className="  my-[20px] font-medium">
              <span className="text-green-500  text-xl">Khởi chiếu vào:</span>{" "}
              {thongTinPhim?.ngayKhoiChieu.slice(0, 10)}
            </p>
            <p className="  my-[20px] font-medium">
              <span className="text-green-500  text-xl">Thời lượng:</span> 120
              phút
            </p>
            <p className="  my-[20px] font-medium">
              <span className="text-green-500  text-xl">Ngôn ngữ:</span> Tiếng
              Anh- Phụ đề Tiếng Việt{" "}
            </p>
            <p className=" text-2xl my-[20px] font-medium">
              <span className="text-green-500 ">Nội Dung:</span>{" "}
              {thongTinPhim?.moTa.slice(0, 250)}
            </p>
            <div className="flex">
              <Button type="primary" danger className="mr-5 !font-medium">
                Xem Trailer
              </Button>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </Detail>
  );
};
const Detail = styled.div`
padding-top: 90px!important;
  @media (max-width: 1682px) {
    .Detail_Img {
      width: 32%;
    }
  }
  @media (max-width: 1500px) {
    .Detail_content {
      p {
        margin-top: 0px;
        font-size: 20px;
      }
    }
  }
  @media (max-width: 1330px) {
    .Detail_Img {
      width: 36%;
    }
    .Detail_content {
      h1 {
        font-size: 25px;
      }
    }
  }
  @media (max-width: 1184px) {
    .Detail_content {
      p {
        font-size: 16px;
        margin-bottom: 10px;
      }
    }
    .Detail_Img {
      width: 43%;
    }
  }
  @media (max-width: 975px) {
    .Detail_Img {
      img {
        width: 90%;
      }
    }
    .Detail_content {
      h1 {
        font-size: 20px;
      }
    }
  }
  @media (max-width: 930px) {
    .Detail_Img {
      width: 50%;
    }
    .Detail_content {
      h1 {
        font-size: 18px;
      }
      p {
        font-size: 15px;
      }
      span {
        font-size: 15px;
      }
    }
  }
  @media (max-width: 870px) {
    .Detail_Img {
      width: 60%;
    }
  }
  @media (max-width: 798px) {
    .Detail_content {
      p {
        font-size: 12px;
        margin-bottom: 0px;
      }
    }
  }
  @media (max-width: 694px) {
    .Detail_body {
      display: block;
    }
    .Detail_content {
      margin-top: 10px;
      width: 100%;
    }
    .Detail_Img {
      width: 100%;
    }
  }
`;
