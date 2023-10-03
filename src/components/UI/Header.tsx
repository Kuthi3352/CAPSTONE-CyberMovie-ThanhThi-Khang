import styled from "styled-components";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "hooks";
import { PATH } from "constant";
import { RootState, useAppDispatch } from "store";
import { QuanLyNguoiDungActions } from "store/QuanLyNguoiDung/slice";
import { useSelector } from "react-redux";
import { useState } from "react";
import { Avatar, Button, Popover } from "components";
import { Input } from "antd";
import { QuanLyPhimSliceActions } from "store/QuanLyPhim/slice";

const Header = () => {
  const dispatch = useAppDispatch();
  const { user, accessToken } = useAuth();
  const navigate = useNavigate();

  /**
   * vì cái header này nằm ở mọi page cho nên tạo biến trong header thì page nào cũng sẽ có => phí
   * flow search nó sẽ là:
   * lấy giá trị của ô input
   * search trong danh sách list phim coi thằng nào match với từ khoá -> tạo ra 1 list search
   * tuy nhiên list đã search ra không được render ở trong header mà lại ở component khác -> ta tạo 1 state trên redux để hứng giá trị, khi ấn search button thì dispatch lên store để lưu
   * component nào cần render ra cái list đó thì lên state lấy là xong => tách được header ra khỏi các component khác
   */

  //lấy để đối chiếu
  const { listPhim } = useSelector((state: RootState) => state.QuanLyPhim);
  //tạo để hứng giá trị tìm kiếm
  const [inputValue, setInputValue] = useState<string>();

  return (
    <div>
      <Container>
        <div className="header-content">
          <h1
            className="ms-5 logo"
            onClick={() => {
              navigate("/");
            }}
          >
            CYBER<span className="text-red-500">MOVIE</span>
          </h1>
          <div className="nav">
            <NavLink to={PATH.searchPage} className="nav-link">
              PHIM
            </NavLink>
            <NavLink to={PATH.heThongRap} className="nav-link">
              RẠP - LỊCH CHIẾU
            </NavLink>
          </div>
          <div className="search">
            <Input
              value={inputValue || ""}
              placeholder="Tìm kiếm tên phim"
              onChange={(ev) => {
                //lấy giá trị của ô tìm kiếm và gán vào state đối chiếu
                const value = ev.target.value;
                setInputValue(value);
              }}
            />
            <Button
              onClick={() => {
                //tạo list phim dựa vào đối chiếu state tìm kiếm
                if (inputValue !== "") {
                  const searchList = listPhim?.filter((item) =>
                    item.tenPhim
                      .toLowerCase()
                      .includes(inputValue?.toLowerCase())
                  );
                  //dispatch kết quả này lên store. xem tiếp xử lý ở trang Home coi render ra cái đống phim
                  dispatch(QuanLyPhimSliceActions.searchlist(searchList));
                } else {
                  dispatch(QuanLyPhimSliceActions.searchlist(undefined));
                }
              }}
            >
              <i className="fa-solid fa-magnifying-glass"></i>
            </Button>
          </div>
        </div>
        <div className="auth">
          {!accessToken && (
            <p>
              <span
                className="span-hover ms-5 align-middle"
                onClick={() => navigate(PATH.login)}
              >
                Đăng nhập
              </span>
              <span className="align-middle"> | </span>
              <span
                className="span-hover align-middle"
                onClick={() => navigate(PATH.register)}
              >
                Đăng ký
              </span>
            </p>
          )}
          {!!accessToken && (
            <Popover
              content={
                <div className="p-10">
                  <p className="font-600 text-16">{user?.hoTen}</p>
                  <hr className="my-16" />
                  <p
                    className="text-16 cursor-pointer"
                    onClick={() => navigate(PATH.account)}
                  >
                    Thông tin tài khoản
                  </p>
                  <hr className="my-16" />
                  <Button
                    className="!h-[46px]"
                    type="primary"
                    onClick={() => dispatch(QuanLyNguoiDungActions.logOut())}
                  >
                    <i className="fa-solid fa-arrow-right-from-bracket text-16"></i>
                    <span className="ml-10 font-500 text-16">Đăng xuất</span>
                  </Button>
                </div>
              }
              trigger="click"
              arrow={false}
            >
              <Avatar
                size="large"
                className="!ml-24 !bg-[var(--primary-color)]"
              >
                <i className="fa-regular fa-user text-20"></i>
              </Avatar>
            </Popover>
          )}
        </div>
      </Container>
    </div>
  );
};

export default Header;

const Container = styled.header`
  position: sticky;
  border-radius: 8px;
  height: 70px;
  padding: 15px 0;
  width: 80%;
  margin: auto;
  display: flex;
  .logo:hover {
    cursor: pointer;
  }

  .header-content {
    height: 100%;
    width: 80%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    h1 {
      font-weight: 900;
      font-style: italic;
      font-size: 35px;
    }
    .nav {
      vertical-align: middle;
      .nav-link {
        font-weight: 500;
        display: inline-block;
        border-radius: 10px;
        height: 100%;
        padding: 6px 1rem;
        transition: 0.5s;
        margin: 0 2px;
        &:hover {
          background-color: #ccc;
        }
      }
    }
    .auth {
      width: 17%;
      display: flex;
      line-height: 100%;
      align-items: center;
      font-weight: 300;
      .span-hover {
        transition: 0.3s;
        border-radius: 10px;
        padding: 6px 12px;
        &:hover {
          background-color: #ccc;
          text-shadow: 2px 2px 8px #ccc;
        }
      }
    }
    .search {
      border: 1px solid #111;
      display: flex;
      align-items: center;
      border-radius: 6px;
      overflow: hidden;
      button {
        height: 46px !important;
        border: none;
        border-radius: initial;
        background: #111;
        color: #fff;
        &:hover {
          color: var(--primary-color) !important;
        }
      }
    }
    input {
      margin-top: 0;
      background: transparent;
      color: #111;
      outline: none;
      border: none;
      box-shadow: none;
      width: 250px;
    }
    input:focus {
      box-shadow: none;
    }
  }
`;
