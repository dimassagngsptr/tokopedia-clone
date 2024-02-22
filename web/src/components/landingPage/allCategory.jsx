import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import now_shopping from "../../assets/now_belanja.png";
import kategori from "../../assets/kategori.png";
import elektronik from "../../assets/elektronik.png";
import laptop from "../../assets/laptop.png";
import pets_care from "../../assets/pets_care.png";
import top_up from "../../assets/top_up.png";
import travel from "../../assets/travel.png";
import handphone from "../../assets/handphone.png";
import finance from "../../assets/finance.png";
import { useState } from "react";

function SampleNextArrow(props) {
   const { onClick, isHover } = props;
   return (
      <svg
         xmlns="http://www.w3.org/2000/svg"
         fill="none"
         viewBox="0 0 24 24"
         strokeWidth={1.5}
         onClick={onClick}
         stroke="currentColor"
         className={`${
            isHover === true
               ? "w-[20px] h-[20px] rounded-full absolute top-2 -right-4 cursor-pointer text-gray-500 shadow-lg hover:scale-110 bg-white"
               : "hidden"
         }`}>
         <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m8.25 4.5 7.5 7.5-7.5 7.5"
         />
      </svg>
   );
}

function SamplePrevArrow(props) {
   const { onClick, isHover } = props;
   return (
      <svg
         onClick={onClick}
         xmlns="http://www.w3.org/2000/svg"
         fill="none"
         viewBox="0 0 24 24"
         strokeWidth={1.5}
         stroke="currentColor"
         className={`${
            isHover === true
               ? "w-[20px] h-[20px] rounded-full absolute top-2 -left-2 z-10 cursor-pointer bg-white text-gray-500 shadow-lg hover:scale-110"
               : "hidden"
         }`}>
         <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5 8.25 12l7.5-7.5"
         />
      </svg>
   );
}
export function AllCategory() {
   const [isHover, setIsHover] = useState(false);
   const items = [
      { name: "Belanja sekarang", icon: now_shopping },
      { name: "Kategori", icon: kategori },
      { name: "Handphone & Tablet", icon: handphone },
      { name: "Top-up & Tagihan", icon: top_up },
      { name: "Elektronik", icon: elektronik },
      { name: "Perawatan Hewan", icon: pets_care },
      { name: "Travel & Entertainment", icon: travel },
      { name: "Keuangan", icon: finance },
      { name: "Komputer & Laptop", icon: laptop },
   ];

   const settings = {
      className: "slider variable-width",
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      variableWidth: true,
      nextArrow: <SampleNextArrow isHover={isHover} />,
      prevArrow: <SamplePrevArrow isHover={isHover} />,
   };
   return (
      <main className="w-full h-[40px]">
         <div
            className="slider-container"
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}>
            <Slider {...settings} className="w-[100%] mx-auto">
               {items?.map((item, idx) => (
                  <div
                     key={idx}
                     className="cursor-pointer"
                     onClick={() => alert(idx)}>
                     <div className="flex max-w-[259px] px-2 rounded-xl justify-around items-center border mx-2 h-[38px]">
                        <img
                           src={item?.icon}
                           className="rounded-lg w-[20%] h-[90%] object-fill"
                           alt={`item-${idx}`}
                        />
                        <small className="text-[12px] font-bold w-[60%]">
                           {item?.name}
                        </small>
                     </div>
                  </div>
               ))}
            </Slider>
         </div>
      </main>
   );
}
