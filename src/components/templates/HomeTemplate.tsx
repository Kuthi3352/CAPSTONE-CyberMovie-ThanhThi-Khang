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
      <div className="SkeletonListMovie grid grid-cols-5 !gap-20 !container  !mx-auto s:grid-cols-1  lgM:!grid-cols-3  3xlM:grid-cols-4 ">
        {[...Array(12)].map(() => {
          return (
            <div className="mdM:!ml-[10px] mdM:!gap-0 lgM:ml-[20px] lgM:!gap-5  3xlM:ml-[50px] 3xlM:!gap-10 ">
              <Card className="3xlM:!w-[250px] !w-[280px] !mt-15  ">
                <Skeleton.Image className="!w-full !h-[200px] 3xlM:!h-[200px] " />
                <Skeleton.Input className="!w-full mt-16 " />
                <Skeleton.Input className="!w-full mt-16 " />
              </Card>
            </div>
          );
        })}
      </div>
    );
  }

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

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  2xl:grid-cols-5  ">
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
                          console.log("path", path);
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
