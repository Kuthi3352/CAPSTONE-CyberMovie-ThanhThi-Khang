import { Button } from "components";
import { useAppDispatch } from "store";
import { DanhSachPhimThunk } from "store/QuanLyPhim/thunk";
import styled from "styled-components";


const PhimTypeButton = () => {
    const dispatch = useAppDispatch();

    return (
        <div>
            <Container className="!my-5">
                <Button
                    className="rounded-lg m-1 !bg-stone-200 "
                    onClick={() => {
                        dispatch(DanhSachPhimThunk("?maNhom=GP01"));
                    }}
                >
                    Phim Hàn Quốc
                </Button>
                <Button
                    className="rounded-lg m-1 !bg-stone-200"
                    onClick={() => {
                        dispatch(DanhSachPhimThunk("?maNhom=GP03"));
                    }}
                >
                    Hành động
                </Button>
                <Button
                    className="rounded-lg m-1 !bg-stone-200"
                    onClick={() => {
                        dispatch(DanhSachPhimThunk("?maNhom=GP04"));
                    }}
                >
                    Viễn tưởng
                </Button>
                <Button
                    className="rounded-lg m-1 !bg-stone-200"
                    onClick={() => {
                        dispatch(DanhSachPhimThunk("?maNhom=GP05"));
                    }}
                >
                    Thần thoại
                </Button>
                <Button
                    className="rounded-lg m-1 !bg-stone-200"
                    onClick={() => {
                        dispatch(DanhSachPhimThunk("?maNhom=GP07"));
                    }}
                >
                    Phiêu lưu
                </Button>
                <Button
                    className="rounded-lg m-1 !bg-stone-200"
                    onClick={() => {
                        dispatch(DanhSachPhimThunk("?maNhom=GP08"));
                    }}
                >
                    Trinh thám
                </Button>
                <Button
                    className="rounded-lg m-1 !bg-stone-200"
                    onClick={() => {
                        dispatch(DanhSachPhimThunk("?maNhom=GP09"));
                    }}
                >
                    Kinh dị
                </Button>
                <Button
                    className="rounded-lg m-1 !bg-stone-200"
                    onClick={() => {
                        dispatch(DanhSachPhimThunk("?maNhom=GP11"));
                    }}
                >
                    Đang flop
                </Button>
                <Button
                    className="rounded-lg m-1 !bg-stone-200"
                    onClick={() => {
                        dispatch(DanhSachPhimThunk("?maNhom=GP12"));
                    }}
                >
                    Phim hot
                </Button>
                <Button
                    className="rounded-lg m-1 !bg-stone-200"
                    onClick={() => {
                        dispatch(DanhSachPhimThunk("?maNhom=GP13"));
                    }}
                >
                    Phim gì đó
                </Button>
            </Container>
            
        </div>
    );
};

export default PhimTypeButton;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80vw;
  margin: auto;
  border:1px solid #e5e7eb;
  border-radius: 8px;
  padding: 20px;
`;

