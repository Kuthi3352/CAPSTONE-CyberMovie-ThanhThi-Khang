import { RouteObject } from "react-router-dom";
import { AuthLayout } from "components";
import { PATH } from "constant";
import { MainLayout } from "components";
import { Account, Detail, Home, Rap } from "pages";
import Login from "pages/Login";
import Register from "pages/Register";
import { BookingPage } from "pages/BookingPage";

// import PhimDangChieu from 'components/UI/PhimDangChieu'

export const router: RouteObject[] = [
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: PATH.account,
        element: <Account />,
      },
      {
        path: PATH.heThongRap,
        element: <Rap></Rap>,
      },

      {
        path: PATH.detail,
        element: <Detail></Detail>,
      },
      {
        path: PATH.thongTinChieu,
        element: <BookingPage></BookingPage>
      }
    ],
  },
  {
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: PATH.login,
        element: <Login></Login>,
      },
      {
        path: PATH.register,
        element: <Register></Register>,
      },
    ],
  },
];
