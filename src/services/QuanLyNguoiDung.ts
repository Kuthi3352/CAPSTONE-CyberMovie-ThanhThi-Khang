import { apiInstance } from "constant";
import { RegisterSchemaType } from "schemas";
import { LoginSchemaType } from "schemas";
import { UserLogin, getUserLoginType } from "types";


const api = apiInstance({
  baseURL: import.meta.env.VITE_QUAN_LY_NGUOI_DUNG_API,
});

export const QuanLyNguoiDungServices = {
  register: (data: RegisterSchemaType) => api.post<ApiResponse<RegisterSchemaType>>("/DangKy", data),
  login: (data: LoginSchemaType) =>
    api.post<ApiResponse<UserLogin>>("/DangNhap", data),
  getUserLogin: () =>
    api.post<ApiResponse<getUserLoginType>>("/ThongTinTaiKhoan"),
};

