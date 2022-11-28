import card_1 from "../../images/baca-1.png"
import card_2 from "../../images/baca-2.png"
import card_3 from "../../images/baca-3.png" 
import "./Sec_5.scss";  

const Sec_5 = () =>{
  return  (
    <>
    <section className="sec-5">
      <div className="container">
      <div className="d-flex align-items-center justify-content-between">
          <div className="sec-4__header-left">
              <div className="sec-4__header-title">
              Kegiatan Pojok Baca Probolinggo
              </div>
              <div className="sec-4__header-text">
              Intip kegiatan yang telah kami selenggarakan 
              </div>
          </div>
          <div className="sec-4__header-right">
          Selengkapnya 
          </div> 
        </div>
        <div className="sec-5__cards">
          <img src={card_1}/>
          <img src={card_2}/>
          <img src={card_3}/>

        </div>
      </div>
    </section>
    </>
  )
}

export default Sec_5;
