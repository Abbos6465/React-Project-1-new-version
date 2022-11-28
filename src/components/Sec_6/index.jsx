import  btn2 from "../../images/Group__1.png";
import whatsapp from "../../images/logos_whatsapp.png"
import "./Sec_6.scss";

const Sec_6 = () => {
  return (
    <>
      <section className="sec-6">
        <div className="container mx-auto text-center">
          <h2 className="sec-6__title text-center">
            Ingin <span className="text-color">Membantu</span> Meningkatkan
            Literasi Anak-Anak Sekitar Kita?
          </h2>
          <h6 className="sec-6__title-2 text-center">
            Percayakan melalui kegiatan kita
          </h6>
          <div>
            <a href="#" className="sec-6__btn text-decoration-none">
              Donasi dengan Kami
              <img src={btn2} />
            </a>
          </div>
          <h6 className="sec-6__title-2 text-center">Atau</h6>
          <a href="#" className="sec-6__btn-2 text-decoration-none mx-auto">
            Hubungi Kami
            <img src={whatsapp} className="ms-2" />
          </a>
        </div>
      </section>
    </>
  );
};

export default Sec_6;
