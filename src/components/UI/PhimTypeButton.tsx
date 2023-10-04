import { Button } from "components";
import { useAppDispatch } from "store";
import { DanhSachPhimThunk } from "store/QuanLyPhim/thunk";
import styled from "styled-components";

const PhimTypeButton = () => {
  const dispatch = useAppDispatch();

  return (
    <div>
      <Container className="!my-5">
        <div>
          <Button
            className="rounded-lg m-1 !bg-stone-200 xl:mx-[10px] 2xl:mx-[20px]"
            onClick={() => {
              dispatch(DanhSachPhimThunk("?maNhom=GP03"));
            }}
          >
            Hành động
          </Button>
          <Button
            className="rounded-lg m-1 !bg-stone-200 xl:mx-[10px] 2xl:mx-[20px]"
            onClick={() => {
              dispatch(DanhSachPhimThunk("?maNhom=GP04"));
            }}
          >
            Viễn tưởng
          </Button>
        </div>
        <div>
          <Button
            className="rounded-lg m-1 !bg-stone-200 xl:mx-[10px] 2xl:mx-[20px]"
            onClick={() => {
              dispatch(DanhSachPhimThunk("?maNhom=GP05"));
            }}
          >
            Thần thoại
          </Button>
          <Button
            className="rounded-lg m-1 !bg-stone-200 xl:mx-[10px] 2xl:mx-[20px]"
            onClick={() => {
              dispatch(DanhSachPhimThunk("?maNhom=GP07"));
            }}
          >
            Phiêu lưu
          </Button>
        </div>
        <div>
          <Button
            className="rounded-lg m-1 !bg-stone-200 xl:mx-[10px] 2xl:mx-[20px]"
            onClick={() => {
              dispatch(DanhSachPhimThunk("?maNhom=GP08"));
            }}
          >
            Trinh thám
          </Button>
          <Button
            className="rounded-lg m-1 !bg-stone-200 xl:mx-[10px] 2xl:mx-[20px] kinhdi"
            onClick={() => {
              dispatch(DanhSachPhimThunk("?maNhom=GP09"));
            }}
          >
            Kinh dị
          </Button>
        </div>
        <div>
          <Button
            className="rounded-lg m-1 !bg-stone-200 xl:mx-[10px] 2xl:mx-[20px]"
            onClick={() => {
              dispatch(DanhSachPhimThunk("?maNhom=GP11"));
            }}
          >
            Đang flop
          </Button>
          <Button
            className="rounded-lg m-1 !bg-stone-200 xl:mx-[10px] 2xl:mx-[20px]"
            onClick={() => {
              dispatch(DanhSachPhimThunk("?maNhom=GP12"));
            }}
          >
            Phim hot
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default PhimTypeButton;

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 80vw;
  margin: auto;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  padding: 20px;
  @media (max-width: 1061px) {
    .kinhdi {
      padding: 0 27px !important;
    }
  }
  @media (max-width: 530px) {
    button {
      padding: 5px 5px !important;
    }
    .kinhdi {
      padding: 0 16px !important;
    }
  }
  @media (max-width: 425px) {
    button {
      padding: 0 !important;
    }
    .kinhdi {
      padding: 0 11px !important;
    }
  }
  @media (max-width: 360px) {
    button {
      padding: 0 !important;
      margin: 2px !important;
    }
  }
`;
