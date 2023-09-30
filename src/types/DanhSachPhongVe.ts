export type ThongTinPhimRap = {
    maLichChieu?: number;
    tenCumRap?: string;
    tenRap?: string;
    diaChi?: string;
    tenPhim?: string;
    hinhAnh?: string;
    ngayChieu?: string;
    gioChieu?: string;
}
export type DanhSachGhe = {
    maGhe?: number;
    tenGhe?: string;
    maRap?: number;
    loaiGhe?: string;
    stt?: string;
    giaVe?: number;
    daDat?: boolean;
    taiKhoanNguoiDat?:string;
}
export type DanhSachPhongVe = {
    ThongTinPhim?: ThongTinPhimRap[];
    DanhSachGhe?: DanhSachGhe[];
}