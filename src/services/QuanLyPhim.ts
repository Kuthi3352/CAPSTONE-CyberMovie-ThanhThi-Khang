import { apiInstance } from "constant";
import { Banner } from "types";
import { ThongTinPhim } from "types";


const api = apiInstance({
  baseURL: import.meta.env.VITE_QUAN_LY_PHIM_API,
});

export const QuanLyPhimServices = {
  banner: () => api.get<ApiResponse<Banner[]>>("/LayDanhSachBanner"),
  danhSachPhim: (query: string) =>
    api.get<ApiResponse<ThongTinPhim[]>>(
      `/LayDanhSachPhim/${query}`
    ),
  detailPhim: (query:string)=>api.get<ApiResponse<ThongTinPhim>>(`/LayThongTinPhim?MaPhim=${query}`)
};
