import "./Sec_2.scss";
import img_1 from "../../images/Ellipse 24.png";
import img_2 from "../../images/Ellipse 24 (1).png"

const Sec_2 = ()=>{
return (
  <>
  <section className="sec-2">
    <div className="container">
      <h6 className="sec-2__title">Kenapa Kita <span className="text-color">Harus</span> Membaca Buku?</h6>
    <div className="sec-2__box-wrapper">
      <div className="sec-2__box"> 
        <p className="sec-2__box__text">
         “Aku rela dipenjara asalkan <span className="fw-bold">bersama buku</span>, karena dengan buku <span className="fw-bold">aku babes"</span>
        </p>
        <div className="ms-5 d-flex gap-4  align-items-center">
          <img src={img_1}/>
          <div className="">
            <div className="sec-2__userName">
              Mohammad Hatta
            </div>
            <div className="sec-2__userText">
              Wakil Presiden Indonesia Pertama
            </div>
          </div>
        </div>
      </div>
          <div className="sec-2__box">
            <p className="sec-2__box__text">
              “Cuma perlu <span className="fw-bold">satu buku</span> untuk jatuh cinta pada membaca, Cari Buku itu! <span className="fw-bold">Mari jatuh cinta!</span>  
            </p>
            <div className="d-flex gap-4 align-items-center">
              <img src={img_2}/>
              <div className="">
               <div className="sec-2__userName">
               Najwa Shihab
               </div>
               <div className="sec-2__userText">
               Duta Membaca
               </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  </section>
  </>
)
}


export default Sec_2;