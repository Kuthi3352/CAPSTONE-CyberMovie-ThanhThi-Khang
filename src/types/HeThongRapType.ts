export type HeThongRapType = {
  maHeThongRap?: string;
  tenHeThongRap?: string;
  biDanh?: string;
  logo?: string;
};

export type RapType = {
  maRap?: string;
  tenRap?: string;
};

export type CumRapType = {
  maCumRap?: string;
  tenCumRap?: string;
  diaChi?: string;
  danhSachRap?: RapType[];
};

export type LichChieuType = {
  maLichChieu?: string;
  maRap?: string;
  tenRap?: string;
  ngayChieuGioChieu?: string;
  giaVe?: number;
  thoiLuong?: number;
};

export type DanhSachPhim = {
  lstLichChieuTheoPhim?: LichChieuType[];
  dangChieu: boolean;
  hinhAnh: string;
  hot: boolean;
  maPhim: number;
  sapChieu: boolean;
  tenPhim: string;
};

export type lstCumRapType = {
  danhSachPhim?: DanhSachPhim[];
  diaChi?: string;
  hinhAnh?: string;
  maCumRap?: string;
  tenCumRap?: string;
};

export type HeThongRapChieuType = {
  cumRapChieu?: {
    lichChieuPhim?: LichChieuType[];
    maCumRap?: string;
    tenCumRap?: string;
    hinhAnh?: string;
    diaChi?: string;
  }[];
  maHeThongRap?: string;
  tenHeThongRap?: string;
  logo?: string;
};

export type ThongTinLichChieuType = {
  maHeThongRap?: string;
  tenHeThongRap?: string;
  mahom?: string;
  logo?: string;
  lstCumRap?: lstCumRapType[];
};
