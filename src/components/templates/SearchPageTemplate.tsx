import { Button, Card } from "components";
import { PATH } from "constant";
// import { useAuth } from "hooks"
import { useSelector } from "react-redux";
import { generatePath, useNavigate } from "react-router-dom";
import { RootState } from "store";
import styled from "styled-components";

const SearchPageTemplate = () => {
  const { listSearch, listPhim } = useSelector(
    (state: RootState) => state.QuanLyPhim
  );
  const navigation = useNavigate();
  // const {user,accessToken} = useAuth()
  // console.log(user);

  return (
    <Container>
      {!listSearch && (
        <div>
          <p className="text-3xl text-center font-semibold">
            Nhập tên phim để tìm kiếm
          </p>
          <p className="italic text-center my-5">
            Bạn có thể nhập tên phim vào ô tìm kiếm để tìm phim muốn xem
          </p>
        </div>
      )}
      <div className="grid grid-cols-1 gap-20 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  2xl:grid-cols-4  ">
        {(listSearch ? listSearch : listPhim)?.map((item) => {
          return (
            <Card key={item.maPhim} className="card-item">
              <div className="img">
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
                      navigation(path);
                    }}
                  >
                    Detail
                  </Button>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </Container>
  );
};

export default SearchPageTemplate;

const Container = styled.div`
  width: 80%;
  margin: auto;
  padding-top: 100px !important;
`;
