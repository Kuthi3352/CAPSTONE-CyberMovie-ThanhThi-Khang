import { apiInstance } from "constant/APIInstance";
import { Banner } from "types/BannerObjectType";
import { ThongTinPhim } from "types/DanhSachPhimType";


const api = apiInstance({
  baseURL: import.meta.env.VITE_QUAN_LY_PHIM_API,
});

export const QuanLyPhimServices = {
  banner: () => api.get<ApiResponse<Banner[]>>("/LayDanhSachBanner"),
  danhSachPhim: (query: string) =>
    api.get<ApiResponse<ThongTinPhim[]>>(
      `/LayDanhSachPhim/${query}`
    ),
};
