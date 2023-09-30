import { apiInstance } from "constant/APIInstance";
import {
  CumRapType,
  HeThongRapType,
  ThongTinLichChieuType,
} from "types/HeThongRapType";


const api = apiInstance({
  baseURL: import.meta.env.VITE_QUAN_LY_RAP_API,
});

export const QuanLyRapServices = {
  heThongRap: () =>
    api.get<ApiResponse<HeThongRapType[]>>("/LayThongTinHeThongRap"),
  cumRap: (query: string) =>
    api.get<ApiResponse<CumRapType[]>>(
      `LayThongTinCumRapTheoHeThong?maHeThongRap=${query}`
    ),
  thongTinLichChieu: () =>
    api.get<ApiResponse<ThongTinLichChieuType[]>>(
      `LayThongTinLichChieuHeThongRap?maNhom=GP03`
    ),
};
