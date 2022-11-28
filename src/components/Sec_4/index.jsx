import img_1 from "../../images/apa-1.png";
import img_2 from "../../images/apa-2.png";
import vec_1 from "../../images/sec-4__vec-1.png"
import vec_2 from "../../images/sec-4__vec-2.png"
import "./Sec_4.scss";

const Box = (props) => {
  return (
    <>
      <div className="sec-4__box">
         <p className="sec-4__box-text">
           Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
         </p>
         <div className="d-flex align-items-center gap-4">
           <img src={props.img} className="sec-4__box-img"/>
           <div>
             <div className="sec-4__name">
               {props.name}
             </div>
             <div className="sec-4__text">
              {props.text}
             </div>
           </div>
         </div>
       </div>
    </>
  )  
}


const Sec_4 = () => {
 return (
  <>
  <section className="sec-4">
   <div className="container">
     <div className="d-flex align-items-center justify-content-between">
       <div className="sec-4__header-left">
           <div className="sec-4__header-title">
            Apa Kata Mereka?
           </div>
           <div className="sec-4__header-text">
            Mereka yang telah menjadi pengunjung tetap kami
           </div>
       </div>
       <div className="sec-4__header-right">
       Selengkapnya 
       </div> 
     </div>
     <div className="sec-4__boxs">
               <img src={vec_1} className="vec-1"/>
               <img src={vec_2} className="vec-2"/>
        <Box img={img_1} name="Guy Hawkins" text="32 Tahun, Karyawan"/>
        <Box img={img_2} name="Brooklyn Simmons" text="20 Tahun, Mahasiswa"/>
     </div>
     <div className="d-flex align-items-center justify-content-center gap-3">
        <div className="add"></div>
        <div className="add"></div>
        <div className="add"></div>

     </div>
   </div>
  </section>
 </>
 )
}

export default Sec_4;