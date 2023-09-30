export type UserLogin = {
  taiKhoan: string;
  hoTen: string;
  // matKhau: string;
  email: string;
  soDT: string;
  maNhom: string;
  maLoaiNguoiDung: "KhachHang" | "QuanTri";
  accessToken: string;
};

export type getUserLoginType = Omit<UserLogin, "accessToken"> & {
  thongTinDatVe?: [];
  loaiNguoiDung: {
    maLoaiNguoiDung: "KhachHang" | "QuanTri";
  };
};
