import { apiInstance } from "constant/APIInstance";
import { DanhSachPhongVe} from "types/DanhSachPhongVe";

const api = apiInstance({
    baseURL: import.meta.env.VITE_DANH_SACH_PHONG_VE_API,

});
export const DanhSachPhongVeServices = {
    // ThongTinPhimRap: (query: string) => 
    // api.get<ApiResponse<ThongTinPhimRap>>(
    //     `?MaLichChieu=${query}`
    // ),
    // DanhSachGhe: (query: string) =>
    // api.get<ApiResponse<DanhSachGhe[]>>(
    //     `?MaLichChieu=${query}`
    // ),
    DanhSachPhongVe: (query: string) =>
    api.get<ApiResponse<DanhSachPhongVe>>(
        `?MaLichChieu=${query}`
    ),
  
    

  
}
