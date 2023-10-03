
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Card } from "components";
import PhimTypeButton from "components/UI/PhimTypeButton";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { RootState } from "store";
import { Autoplay } from "swiper/modules";
import { Button } from "antd";
import { generatePath, useNavigate } from "react-router-dom";
import { PATH } from "constant";


const HomeTemplate = () => {
  const navigation = useNavigate();
  const { listPhim, bannerList, listSearch } = useSelector(
    (state: RootState) => state.QuanLyPhim
  );
 

  return (
    <Container>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
      >
        {bannerList?.map((item) => {
          return (
            <SwiperSlide key={item.maPhim}>
              <img
                src={item.hinhAnh}
                className="w-full"
                style={{
                  maxHeight: 750,
                }}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>

      <Container_2>
        <PhimTypeButton></PhimTypeButton>
        <div className="grid grid-cols-4 gap-5">
          {
          (listSearch ? listSearch : listPhim)?.map(
            (item) => {
              return (
                <Card key={item.maPhim} className="card-item">
                  <div className="img ">
                    <img src={item.hinhAnh} alt="" />
                  </div>
                  <div className="phim-content flex justify-between">
                    <div>
                      <p className="font-bold">{item.tenPhim}</p>
                      <p className="italic">Rating: {item.danhGia}</p>
                    </div>
                    <div>
                      <Button
                        type="primary"
                        onClick={() => {
                          const path = generatePath(PATH.detail, {
                            movieID: item.maPhim,
                          });
                          console.log("path", path);
                          navigation(path);
                        }}
                      >
                        Detail
                      </Button>
                    </div>
                  </div>
                </Card>
              );
            }
          )}
        </div>
      </Container_2>
    </Container>
  );
};

export default HomeTemplate;

const Container = styled.div`
  width: 100vw;
  margin: auto;
  
`;

const Container_2 = styled.div`
  width: 80%;
  margin: auto;
`;
