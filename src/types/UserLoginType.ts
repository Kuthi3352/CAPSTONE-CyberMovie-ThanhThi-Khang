export type UserLogin = {
  taiKhoan: string;
  hoTen: string;
  email: string;
  soDT: string;
  maNhom: string;
  maLoaiNguoiDung: "KhachHang" | "QuanTri";
  accessToken: string;
};

export type getUserLoginType = Omit<UserLogin, "accessToken"> & {
  thongTinDatVe?: thongTinDatVe[];
  giaVe?: string;
  loaiNguoiDung: {
    maLoaiNguoiDung: "KhachHang" | "QuanTri";
  };
};

export type danhSachGhe = {
  maHeThongRap: string;
  tenHeThongRap: string;
  maCumRap: string;
  tenCumRap: string;
  maRap: number;
  tenRap: string;
  maGhe: number;
  tenGhe: string;
};

export type thongTinDatVe = {
  danhSachGhe?: danhSachGhe[];
  giaVe?: number;
  ngayDat?: string;
  tenPhim?: string;
  hinhAnh?: string;
  maVe?:number;
  thoiLuongPhim?:number
};
