import { apiInstance } from "constant/APIInstance";
import { RegisterSchemaType } from "schemas";
import { LoginSchemaType } from "schemas/LoginSchema";
import { UserLogin, getUserLoginType } from "types/UserLoginType";


const api = apiInstance({
  baseURL: import.meta.env.VITE_QUAN_LY_NGUOI_DUNG_API,
});

export const QuanLyNguoiDungServices = {
  register: (data: RegisterSchemaType) => api.post("/DangKy", data),
  login: (data: LoginSchemaType) =>
    api.post<ApiResponse<UserLogin>>("DangNhap", data),
  getUserLogin: () =>
    api.post<ApiResponse<getUserLoginType>>("/ThongTinTaiKhoan"),
};

