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
import cn from "classnames";

const Header = () => {
  const dispatch = useAppDispatch();
  const { accessToken } = useAuth();
  const navigate = useNavigate();
  const { listPhim } = useSelector((state: RootState) => state.QuanLyPhim);
  const [inputValue, setInputValue] = useState<string>();
  const { userLogin } = useSelector(
    (state: RootState) => state.QuanLyNguoiDung
  );
  const [show, setShow] = useState<boolean>(true);

  return (
    <div>
      <Container>
        <div className="header-content">
          <h1
            className="ms-5 logo lgM:!text-[26px]"
            onClick={() => {
              dispatch(QuanLyPhimSliceActions.searchlist(undefined));
              navigate("/");
            }}
          >
            CYBER<span className="text-red-500 lgM:!text-[26px]">MOVIE</span>
          </h1>
          <ul className="flex header-drop">
            <li className="bars" style={{ display: "none" }}>
              <i
                className="fa-solid fa-bars nav-bars"
                onClick={() => {
                  if (show) {
                    setShow(false);
                  } else {
                    setShow(true);
                  }
                }}
              ></i>
            </li>
            <li className={cn("nav", { none: show })}>
              <NavLink
                to={PATH.heThongRap}
                className="nav-link text-xl lgM:!px-[8px] lgM:!text-xs xlM:text-base "
              >
                RẠP - LỊCH CHIẾU
              </NavLink>
              <NavLink
                to={PATH.searchPage}
                className="nav-link text-xl lgM:!text-xs xlM:text-base"
              >
                PHIM
              </NavLink>
            </li>
            <li className={cn("search", { none: show })}>
              <div className="search-background">
                <Input
                  value={inputValue || ""}
                  placeholder="Tìm kiếm tên phim"
                  onChange={(ev) => {
                    const value = ev.target.value;
                    setInputValue(value);
                  }}
                />
              </div>
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
            </li>
            <li className={cn("auth", { none: show })}>
              {!accessToken && (
                <div className=" flex flex-col ms-5 gap-4">
                  <span
                    className="span-hover align-middle"
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
                          dispatch(QuanLyNguoiDungActions.logOut());
                          navigate("/");
                        }}
                      >
                        <i className="fa-solid fa-arrow-right-from-bracket text-16"></i>
                        <span className="ml-10 font-500 text-16">
                          Đăng xuất
                        </span>
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
            </li>
          </ul>
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
  background-color: #ffffff;
  border-radius: 8px;
  height: 89px;
  padding: 15px 0;
  width: 100%;
  margin: auto;

  .logo:hover {
    cursor: pointer;
  }
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;

  .header-content {
    padding: 0 40px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    h1 {
      width: 20%;
      font-weight: 900;
      font-style: italic;
      font-size: 35px;
    }
    ul {
      width: 70%;
      justify-content: space-between;
      li {
        background-color: white;
      }
      .nav {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        width: 40%;
        .nav-link {
          font-weight: 500;
          display: inline-block;
          border-radius: 10px;
          /* height: 100%; */
          padding: 6px 1rem;
          transition: 0.5s;
          margin: 0 2px;
          &:hover {
            background-color: #ccc;
          }
        }
      }
      .auth {
        width: 20%;
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
        display: flex;
        align-items: center;
        border-radius: 6px;
        width: 40%;
        overflow: hidden;
        button {
          height: 35px !important;
          border: none;
          border-radius: 0 6px 6px 0;
          background: #5b5a5ab9;
          color: #fff;
          transition: 0.5s;
          &:hover {
            color: white !important;
            background-color: #111;
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
            border-color: #11111168;
          }
        }
        input:focus {
          box-shadow: none;
          border-color: #111;
        }
      }
    }
    @media screen and (max-width: 765px) {
      .logo {
        width: 50% !important;
        position: absolute;
        top: 10%;
      }
      .header-drop {
        flex-direction: column;
        width: 50% !important;
        position: absolute;
        top: 20%;
        right: 4%;
        .bars {
          display: block !important;
        }
        li {
          padding: 4px 0;
        }
        .bars {
          display: block;
          background-color: transparent;
          text-align: right;
        }
        .nav {
          .nav-link {
            font-size: 12px;
            display: inline-block !important;
            width: 100% !important;
            text-align: center;
          }
          width: 100%;
          display: flex;
          flex-direction: column;
        }
        .search {
          width: 100% !important;
          display: flex;
          justify-content: center;
          border-radius: 0;
          input {
            width: 100% !important;
          }
        }
        .auth {
          width: 100% !important;
          text-align: center;
          display: block;
        }
      }
      .logo {
        font-size: 30px;
      }
      .header-content {
        justify-content: space-between;
      }
      .none {
        display: none !important;
      }
    }
  }
`;
