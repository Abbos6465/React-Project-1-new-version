import brand from "../../images/brand.png";
import "./style.scss";
function Header(){
  return (
    <>
    <header>
      <div className="container">
        <nav className="nav d-flex justify-content-between align-items-center">
          <a href="#" className='nav__brand'>
          <img src={brand} alt="nav__logo"/>
          </a>
          <ul className="nav__list d-flex align-items-center">
            <li className="nav__item">
              <a href="#" className="nav__item__link text-decoration-none">Beranda</a>
            </li>
            <li className="nav__item">
              <a href="#" className="nav__item__link text-decoration-none">Koleksi</a>
            </li>
            <li className="nav__item">
              <a href="#" className="nav__item__link text-decoration-none">Syarat dan Ketentuan</a>
            </li>
            <li className="nav__item">
              <a href="#" className="nav__item__link text-decoration-none">Kontak</a>
            </li>
            <li className="nav__item">
              <a href="#" className="nav__item__link text-decoration-none btn-link">Masuk</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
    </>
  )
}


export default Header;