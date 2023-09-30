// export type DanhSachPhimTheoTrangType = {
//   currentPage?: string;
//   count?: string;
//   totalPages?: string;
//   totalCount?: string;
//   items?: ThongTinPhim[];
// };

export type ThongTinPhim = {
  maPhim?: number;
  tenPhim?: string;
  biDanh?: string;
  trailer?: string;
  hinhAnh?: string;
  moTa?: string;
  maNhom?: string;
  ngayKhoiChieu?: string;
  danhGia?: number;
  hot?: boolean;
  dangChieu?: boolean;
  sapChieu?: boolean;
};


// export type QuerryObject ={
// movieName?:string |undefined
// }