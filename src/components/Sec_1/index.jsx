import  btn1 from "../../images/Vector (1).png";
import  btn2 from "../../images/Group.png";
import card_1 from "../../images/card-1.png";
import card_2 from "../../images/card-2.png";
import card_3 from "../../images/card-3.png";
import card_4 from "../../images/card-4.png";
import card_5 from "../../images/card-5.png";
import card_6 from "../../images/card-6.png";
import card_7 from "../../images/card-7.png";
import "./style.scss";

function Sec_1(){
return (
  <>
   <section className="sec-1">
      <div className="container">
        <div className="text-center"><span className="text-color">Pojok Baca</span> Probolinggo</div>
        <h1 className="text-center sec-1__title">Pinjam Buku Secara <span className="text-color">Gratis</span> untuk Masyarakat</h1>
        <div className="d-flex align-items-center justify-content-center gap-5">
          <a href="#" className="sec-1__btn text-decoration-none">Cari Judul Buku
          <img src={btn1}/>
          </a>
          <a href="#" className="sec-2__btn text-decoration-none">Donasi dengan Kami
          <img src={btn2}/>
          </a>
        </div>
        <div className="dec"></div>
        <div className="cards">
          <img src={card_1} alt="card__rasm" className="card-1"/>
          <img src={card_2} alt="card__rasm" clasName="card-2" id="card_2"/>
          <img src={card_3} alt="card__rasm" className="card-3"/>
          <img src={card_4} alt="card__rasm" className="card-4"/>
          <img src={card_5} alt="card__rasm" className="card-5"/>
          <img src={card_6} alt="card__rasm" className="card-6"/>
          <img src={card_7} alt="card__rasm" className="card-7"/>
        </div>
      </div>  
      </section>
  </>
)
}

export default Sec_1;