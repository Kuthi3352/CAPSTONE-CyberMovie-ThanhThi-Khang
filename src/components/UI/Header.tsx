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
import { toVie } from "utils";

const Header = () => {
  const dispatch = useAppDispatch();
  const { accessToken } = useAuth();
  const navigate = useNavigate();
  const { listPhim } = useSelector((state: RootState) => state.QuanLyPhim);
  const [inputValue, setInputValue] = useState<string>();
  const { userLogin } = useSelector((state: RootState) => state.QuanLyNguoiDung)

  return (
    <div>
      <Container>
        <div className="header-content">
          <h1
            className="ms-5 logo"
            onClick={() => {
              dispatch(QuanLyPhimSliceActions.searchlist(undefined));
              navigate("/");
            }}
          >
            CYBER<span className="text-red-500">MOVIE</span>
          </h1>
          <div className="nav">
            <NavLink to={PATH.heThongRap} className="nav-link">
              RẠP - LỊCH CHIẾU
            </NavLink>
            <NavLink to={PATH.searchPage} className="nav-link">
              PHIM
            </NavLink>
          </div>
          <div className="search">
            <Input
              value={inputValue || ""}
              placeholder="Tìm kiếm tên phim"
              onChange={(ev) => {
                const value = ev.target.value;
                setInputValue(value);
              }}
            />
            <Button
              onClick={() => {
                if (inputValue !== "") {
                  const searchList = listPhim?.filter((item) =>
                    toVie(item.tenPhim).includes(toVie(inputValue))
                  );
                  dispatch(QuanLyPhimSliceActions.searchlist(searchList));
                } else {
                  dispatch(QuanLyPhimSliceActions.searchlist(undefined));
                }
                navigate(PATH.searchPage);
              }}
            >
              <i className="fa-solid fa-magnifying-glass"></i>
            </Button>
          </div>
        </div>
        <div className="auth ">
          {!accessToken && (
            <div className=" flex flex-col ms-5" >
              <span
                className="span-hover  align-middle"
                onClick={() => navigate(PATH.login)}
              >
                Đăng nhập
              </span>
              <span
                className="span-hover align-middle"
                onClick={() => navigate(PATH.register)}
              >
                Đăng ký
              </span>
            </div>
          )}
          {!!accessToken && (
            <Popover
              content={
                <div className="p-10">
                  <p className="font-600 text-16">{userLogin?.hoTen}</p>
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
                    onClick={() => {
                      dispatch(QuanLyNguoiDungActions.logOut())
                      navigate('/')
                    }
                    }
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
  position: absolute;
  z-index: 99;
  left: 50%;
  transform: translateX(-50%);
  background-color: #fff;
  border-radius: 8px;
  height: 70px;
  padding: 15px 0;
  width: 80%;
  margin: auto;
  display: flex;
  vertical-align:middle;
  .logo:hover {
    cursor: pointer;
  }
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;

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
      height: 100%;
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
      /* border: 1px solid #111; */
      display: flex;
      align-items: center;
      border-radius: 6px;
      overflow: hidden;
      button {
        height: 35px !important;
        border: none;
        border-radius: initial;
        background: #5b5a5a45;
        color: #fff;
        transition: 0.5s;
        &:hover {
          color: white !important;
          background-color: #111;
        }
      }
    }
    input {
      margin-top: 0;
      height: 35px !important;
      background: transparent;
      color: #111;
      outline: none;
      border: 1px solid #fff;
      border-right: none;
      border-radius: 6px 0 0 6px;
      box-shadow: none;
      width: 250px;
      transition: 0.5s;
      &:hover {
        border-color: #111;
      }
    }
    input:focus {
      box-shadow: none;
      border-color: #111;
    }
  }
`;
