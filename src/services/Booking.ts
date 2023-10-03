import { apiInstance } from "constant/APIInstance";
import { DanhSachPhongVe } from "types";

const api = apiInstance({
    baseURL: import.meta.env.VITE_DANH_SACH_PHONG_VE_API,

});
export const DanhSachPhongVeServices = {
    ThongTinPhimRap: (query: string) => 
    api.get<ApiResponse<DanhSachPhongVe>>(
        `LayDanhSachPhongVe?MaLichChieu=${query}`
    ), 
}
