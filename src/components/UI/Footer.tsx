import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Footer = () => {
  return (
    <Container className="mt-[100px] flex flex-col">
      <img
        className="w-full"
        src="https://cinestar.com.vn/catalog/view/theme/default/images/line-bg.png"
        alt="..."
      />
      <div className="footer-content">
        <div className="social">
          <NavLink to="https://www.facebook.com" target="_blank">
            <i className="fa-brands fa-facebook"></i>
          </NavLink>
          <NavLink to="https://www.instagram.com" target="_blank">
            <i className="fa-brands fa-instagram"></i>
          </NavLink>
          <NavLink to="https://www.twitter.com" target="_blank">
            <i className="fa-brands fa-twitter"></i>
          </NavLink>
          <NavLink to="https://www.youtube.com" target="_blank">
            <i className="fa-brands fa-youtube"></i>
          </NavLink>
        </div>
        <div className="mt-[40px] grid grid-cols-2 md:grid-cols-4 gap-[90px] info">
          <div className="">
            <p className="font-700 text-20">
              <span className="text-[var(--primary-color)]">CYBER</span>
              MOVIE
            </p>
            <NavLink to="">Phim đang chiếu</NavLink>
            <NavLink to="">Phim sắp chiếu</NavLink>
            <NavLink to="">Lịch chiếu</NavLink>
            <NavLink to="">Khuyến mãi</NavLink>
          </div>
          <div className="">
            <p className="font-700 text-20">
              <span>THÔNG TIN</span>
            </p>
            <NavLink to="">Giới thiệu</NavLink>
            <NavLink to="">Tin tức</NavLink>
            <NavLink to="">Hỏi đáp</NavLink>
            <NavLink to="">Liên hệ</NavLink>
          </div>
          <div className="chinhSach">
            <p className="font-700 text-20 ">
              <span>CHÍNH SÁCH VÀ QUY ĐỊNH</span>
            </p>
            <NavLink to="">Quy định chung</NavLink>
            <NavLink to="">Điều khoản giao dịch</NavLink>
            <NavLink to="">Chính sách bảo mật</NavLink>
            <NavLink to="">Thông tin công ty</NavLink>
          </div>
          <div className="chinhSach">
            <p className="font-700 text-20">
              <span>CHĂM SÓC KHÁCH HÀNG</span>
            </p>
            <p className="mt-16 hotLine">Hotline: 1900 0000</p>
            <p className="mt-16 hotLine">Giờ làm việc: 8:00 - 22:00</p>
            <p className="mt-16 hotLine">Email hỗ trợ: cskh@gmail.com</p>
          </div>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.footer`
  .footer-content {
    max-width: var(--max-width);
    margin: auto;
    padding: 20px 40px;

    .social {
      font-size: 26px;
      color: #111;
      display: flex;
      gap: 30px;
      justify-content: center;
      i {
        cursor: pointer;
        transition: all 0.3s ease-in-out;
        &:hover {
          color: var(--primary-color);
        }
      }
    }

    .info {
      a {
        transition: all 0.3s ease-in-out;
        display: block;
        margin-top: 16px;
        &:hover {
          color: var(--primary-color);
          text-shadow: var(--primary-color) 0 0 1px;
          /* font-weight: 600; */
        }
      }
    }
    @media (max-width: 1409px) {
      .info {
        p {
          font-size: 18px;
        }
        a {
          font-size: 15px;
        }
        .hotLine {
          font-size: 15px;
        }
      }
    }
    @media (max-width: 1305px) {
      .info {
        gap: 60px;
        p {
          font-size: 15px;
        }
        a {
          font-size: 12px;
        }
        .hotLine {
          font-size: 12px;
        }
      }
    }
    @media (max-width: 1059px) {
      .info {
        gap: 40px;
        p {
          font-size: 14px;
        }
      }
    }
    @media (max-width: 947px) {
      .info {
        gap: 15px;
        p {
          font-size: 11px;
        }
        .hotLine {
          font-size: 10px;
        }
      }
    }
    @media (max-width: 360px) {
      .info {
        p {
          font-size: 10px;
        }
      }
    }
  }
`;
