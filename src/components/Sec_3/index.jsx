import img from "../../images/sum.png"
import "./Sec_3.scss";

const Sum = (props) =>{
  return (
       <div className="d-flex gap-4 align-items-center">
            <img src={img} className="sec-3__img"/>
            <div className="">
              <div className="sec-3__sum">
                {props.sum}
              </div>
              <div className="sec-3__text">
                {props.text}
              </div>
            </div>
          </div>
  )
}

const Sec_3 = () =>{
  return (
    <>
    <section className="sec-3">
      <div className="container">
        <div className="d-flex justify-content-around align-items-center">
         <Sum sum="500+" text=" Judul Buku"/>
         <Sum sum="$0" text="Gratis Peminjaman"/>
         <Sum sum="5" text="Kegiatan Rutin"/>
        </div>
      </div>
    </section>
    </>
  )
}

export default Sec_3;