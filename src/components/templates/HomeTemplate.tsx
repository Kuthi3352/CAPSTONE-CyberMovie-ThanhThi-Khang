import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Badge, Card, Skeleton, Button } from "components";
import PhimTypeButton from "components/UI/PhimTypeButton";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { RootState } from "store";
import { Autoplay } from "swiper/modules";

import { generatePath, useNavigate } from "react-router-dom";
import { PATH } from "constant";

const HomeTemplate = () => {
  const navigation = useNavigate();
  const { listPhim, bannerList, listSearch, isFetchingMovieList } = useSelector(
    (state: RootState) => state.QuanLyPhim
  );

  if (isFetchingMovieList) {
    return (
      <Container_2 className="no-header">
        <Skeleton active className="mt-48"></Skeleton>
      </Container_2>
    );
  }

  return (
    <Container className="no-header">
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

        <div className="grid grid-cols-1 gap-20 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  2xl:grid-cols-4  ">
          {(listSearch ? listSearch : listPhim)?.map((item) => {
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
                    <Badge count={item?.hot ? "Hot" : undefined}>
                      <Button
                        type="default"
                        className=""
                        onClick={() => {
                          const path = generatePath(PATH.detail, {
                            movieID: item.maPhim,
                          });
                          navigation(path);
                        }}
                      >
                        Detail
                      </Button>
                    </Badge>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </Container_2>
    </Container>
  );
};

export default HomeTemplate;

const Container = styled.div`
  width: 100%;
  margin: auto;
`;

const Container_2 = styled.div`
  width: 80%;
  margin: auto;
`;
