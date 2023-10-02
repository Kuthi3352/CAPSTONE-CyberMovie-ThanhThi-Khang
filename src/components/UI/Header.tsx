import styled from "styled-components";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth, useQueryUrl } from "hooks";

import { PATH } from "constant";
import { RootState, useAppDispatch } from "store";
import { QuanLyNguoiDungActions } from "store/QuanLyNguoiDung/slice";

import { useSelector } from "react-redux";
import { useState } from "react";
import { Avatar, Button, Popover } from "components";
import { Input } from "antd";

const Header = () => {
  const dispatch = useAppDispatch();
  const { user, accessToken } = useAuth();
  const navigate = useNavigate();

  const { listPhim } = useSelector((state: RootState) => state.QuanLyPhim);
  const [inputValue, setInputValue] = useState();
  const [queryParams, setQueryParams] = useQueryUrl();
  const movieSearch = listPhim?.filter((item) =>
    item.tenPhim
      .toLowerCase()
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .includes((queryParams as any)?.movieName?.toLowerCase())
  );
  console.log(movieSearch);

  return (
    <div>
      {/* <Container>
        <div className="header-content">
          <h1 className="ps-5">
            CYBER<span className="text-red-500">MOVIE</span>
          </h1>
          <div className="nav">
            <NavLink to="/" className="nav-link">
              THÔNG TIN
            </NavLink>
            <NavLink to="/" className="nav-link">
              PHIM
            </NavLink>
            <NavLink to={PATH.heThongRap} className="nav-link">
              RẠP
            </NavLink>
          </div>
        </div>

        <div className="search">
          <Input
            value={inputValue || ""}
            placeholder="Tìm kiếm tên phim"
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            onChange={(ev: any) => {
              setInputValue(ev.target.value);
            }}
          />
          <Button
            onClick={() => {
              setQueryParams({
                movieName: inputValue || undefined,
              });
            }}
          >
            <i className="fa-solid fa-magnifying-glass"></i>
          </Button>
        </div>
        <div className="auth">
          {!accessToken && (
            <p className="dangNhap">
              <span className="span-hover" onClick={() => navigate(PATH.login)}>
                Đăng nhập
              </span>
              <span className="thanhSpan"> | </span>
              <span
                className="span-hover dangKi"
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
      </Container> */}
      <Container>
        <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <a className="flex items-center">
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                CYBER<span className="text-red-500">MOVIE</span>
              </span>
            </a>
            <div className="flex md:order-2">
              <button
                data-collapse-toggle="navbar-cta"
                type="button"
                className="inline-flex items-center p-2 w-50 h-50 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="navbar-cta"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 17 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M1 1h15M1 7h15M1 13h15"
                  />
                </svg>
              </button>
            </div>
            <div
              className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
              id="navbar-cta"
            >
              <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li>
                  <NavLink
                    to="/"
                    className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                    aria-current="page"
                  >
                    THÔNG TIN
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/"
                    className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    PHIM
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={PATH.heThongRap}
                    className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    RẠP
                  </NavLink>
                </li>
                <li>
                  <div className="search">
                    <Input
                      value={inputValue || ""}
                      placeholder="Tìm kiếm tên phim"
                      // eslint-disable-next-line @typescript-eslint/no-explicit-any
                      onChange={(ev: any) => {
                        setInputValue(ev.target.value);
                      }}
                    />
                    <Button
                      onClick={() => {
                        setQueryParams({
                          movieName: inputValue || undefined,
                        });
                      }}
                    >
                      <i className="fa-solid fa-magnifying-glass"></i>
                    </Button>
                  </div>
                </li>
                <li>
                  <div className="auth">
                    {!accessToken && (
                      <p className="dangNhap">
                        <span
                          className="span-hover"
                          onClick={() => navigate(PATH.login)}
                        >
                          Đăng nhập
                        </span>
                        <span className="thanhSpan"> | </span>
                        <span
                          className="span-hover dangKi"
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
                              onClick={() =>
                                dispatch(QuanLyNguoiDungActions.logOut())
                              }
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
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
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
  // width: 80%;
  margin: auto;
  display: flex;

  .header-content {
    height: 100%;
    width: 80%;
    display: flex;
    justify-content: space-around;
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
  }
  .auth {
    // width: 17%;
    // display: flex;
    line-height: 100%;
    align-items: center;
    font-weight: 300;

    .span-hover {
      transition: 0.3s;
      border-radius: 10px;

      &:hover {
        background-color: #ccc;
        text-shadow: 2px 2px 8px #ccc;
      }
    }
    .dangNhap {
      margin-top: 10px;
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
      border-radius: none;
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
  }

  .css-dev-only-do-not-override-18iikkb.ant-input:hover,
  .css-dev-only-do-not-override-18iikkb.ant-input:focus {
    border-color: transparent !important;
    box-shadow: none;
  }

  // @media screen and (max-width: 1315px){
  //   .dangNhap{
  //     font-size: 13px;
  //   }
  // }
  // @media screen and (max-width: 1158px){
  //  .thanhSpan{
  //   display: none;
  //  }
  //  .dangKi{
  //   display: block;
  //  }
  //  .dangNhap{
  //   margin-top:0px !important ;
  //  }
  // }
`;
