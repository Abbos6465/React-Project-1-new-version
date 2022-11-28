import footer_bottom__img from "../../images/ant-design_copyright-circle-outlined.png";
import footer_left__img from "../../images/brand.png";
import instagram from "../../images/instagram.png";
import facebook from "../../images/facebook.png";
import youtobe from "../../images/youtobe.png";
import "./Footer.scss";

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="footer-top d-flex">
            <div className="footer-top__logo">
              <div className="footer__left--title d-flex gap-4 align-items-center justify-content-center">
                <img src={footer_left__img} />
                <span className="footer__left--text">
                  Pojok Baca Probolinggo
                </span>
              </div>
              <div className="footer__top__logo-imgs">
                <img src={instagram} />
                <img src={facebook} />
                <img src={youtobe} />
              </div>
            </div>
            <ul className="footer-list-wrapper">
              <li className="footer-item__wrapper">
                <ul className="footer__list">
                  <li className="bg">Kontak</li>
                  <li className="footer__item">Email</li>
                  <li className="footer__item">Alamat</li>
                  <li className="footer__item">No. Rekening</li>
                </ul>
              </li>
              <li className="footer-item__wrapper">
                <ul className="footer__list">
                  <li className="bg">Tentang Kami</li>
                  <li className="footer__item">Umum</li>
                </ul>
              </li>
              <li className="footer-item__wrapper">
                <ul className="footer__list">
                  <li className="bg">Galery</li>
                  <li className="footer__item">Kegiatan 2018</li>
                  <li className="footer__item">Kegiatan 2019</li>
                  <li className="footer__item">Kegiatan 2020</li>
                  <li className="footer__item">Kegiatan 2021</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="container">
            <div className="footer-bottom__content text-center">
              <img src={footer_bottom__img} />
              <span className="footer-bottom__text">
                Pojok Baca Probolinggo 2022
              </span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
