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
  thongTinDatVe?:danhSachGhe[];
  loaiNguoiDung: {
    maLoaiNguoiDung: "KhachHang" | "QuanTri";
  };
};

export type danhSachGhe = {
  maHeThongRap: string;
  tenHeThongRap: string;
  maCumRap: string;
  tenCumRap: string;
  maRap:number;
  tenRap:string;
  maGhe:number;
  tenGhe:string;
}