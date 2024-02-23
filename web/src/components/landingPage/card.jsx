import card_1 from "../../assets/card_1.png";
import card_2 from "../../assets/card_2.jpg";
import card_3 from "../../assets/card_3.jpeg";
import card_4 from "../../assets/card_4.jpeg";
import card_5 from "../../assets/card_5.jpeg";
import card_6 from "../../assets/card_6.jpg";
import card_7 from "../../assets/card_7.jpg";
import card_8 from "../../assets/card_8.jpg";
import badge_os from "../../assets/badge_os.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function SampleNextArrow(props) {
   const { onClick } = props;
   return (
      <svg
         xmlns="http://www.w3.org/2000/svg"
         fill="none"
         viewBox="0 0 24 24"
         strokeWidth={1.5}
         onClick={onClick}
         stroke="currentColor"
         className={
            "w-[25px] h-[25px] rounded-full absolute -top-10 right-10 cursor-pointer text-white hover:scale-110 bg-gray-700/70"
         }>
         <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m8.25 4.5 7.5 7.5-7.5 7.5"
         />
      </svg>
   );
}

function SamplePrevArrow(props) {
   const { onClick } = props;
   return (
      <svg
         onClick={onClick}
         xmlns="http://www.w3.org/2000/svg"
         fill="none"
         viewBox="0 0 24 24"
         strokeWidth={1.5}
         stroke="currentColor"
         className={
            "w-[25px] h-[25px] rounded-full absolute -top-10 right-24 z-10 cursor-pointer bg-gray-700/70 text-white hover:scale-110"
         }>
         <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5 8.25 12l7.5-7.5"
         />
      </svg>
   );
}
export function Card() {
   const items = [
      {
         img: card_1,
         title: "LIGER Handsfree headset earphone L-10 METAL stereo & bass - Putih",
         price: 29900,
         location: "Jakarta Pusat",
         ratings: "4,5",
         sale: "4rb+",
      },
      {
         img: card_2,
         title: "LIGER Handsfree headset earphone L-10 METAL stereo & bass - Putih",
         price: 29900,
         location: "Jakarta Pusat",
         ratings: "4,5",
         sale: "4rb+",
      },
      {
         img: card_3,
         title: "LIGER Handsfree headset earphone L-10 METAL stereo & bass - Putih",
         price: 29900,
         location: "Jakarta Pusat",
         ratings: "4,5",
         sale: "4rb+",
      },
      {
         img: card_4,
         title: "LIGER Handsfree headset earphone L-10 METAL stereo & bass - Putih",
         price: 29900,
         location: "Jakarta Pusat",
         ratings: "4,5",
         sale: "4rb+",
      },
      {
         img: card_5,
         title: "LIGER Handsfree headset earphone L-10 METAL stereo & bass - Putih",
         price: 29900,
         location: "Jakarta Pusat",
         ratings: "4,5",
         sale: "4rb+",
      },
      {
         img: card_6,
         title: "LIGER Handsfree headset earphone L-10 METAL stereo & bass - Putih",
         price: 29900,
         location: "Jakarta Pusat",
         ratings: "4,5",
         sale: "4rb+",
      },
      {
         img: card_7,
         title: "LIGER Handsfree headset earphone L-10 METAL stereo & bass - Putih",
         price: 29900,
         location: "Jakarta Pusat",
         ratings: "4,5",
         sale: "4rb+",
      },
      {
         img: card_8,
         title: "LIGER Handsfree headset earphone L-10 METAL stereo & bass - Putih",
         price: 29900,
         location: "Jakarta Pusat",
         ratings: "4,5",
         sale: "4rb+",
      },
   ];
   const settings = {
      dots: false,
      infinite: false,
      slidesToShow: 6,
      slidesToScroll: 1,
      speed: 300,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
   };
   return (
      <main className="border-t border-b-8 mt-[26px] mx-[76px]">
         <h1 className="font-bold text-[20px] mt-[30px]">
            Bayar Ditempat {"<"} 49rb
         </h1>
         <Slider {...settings} className="my-[36px] pb-8">
            {items?.map((item, idx) => (
               <div
                  key={idx}
                  onClick={() => alert(idx)}
                  className="bg-white rounded-lg shadow-[2px_2px_10px_1px_rgba(5,5,2,0.2)] h-[340px] max-w-[190px] px-2 mx-1 py-1 my-3 gap-2 flex flex-col cursor-pointer">
                  <img
                     src={item?.img}
                     alt=""
                     className="h-[186px] w-[100%] object-fill"
                  />
                  <p className="text-[12px]">{item?.title}</p>
                  <p className="font-bold text-[16px]">
                     {item?.price?.toLocaleString("ID", {
                        style: "currency",
                        currency: "IDR",
                     })}
                  </p>
                  <div className="flex gap-1 items-center">
                     <img src={badge_os} className="h-3 w-3" alt="OS Badge" />
                     <p className="text-[12px] text-gray-600">
                        {item?.location}
                     </p>
                  </div>
                  <div className="flex items-center gap-1">
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="orange"
                        className="w-4 h-4">
                        <path
                           fillRule="evenodd"
                           d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                           clipRule="evenodd"
                        />
                     </svg>
                     <p className="text-gray-600 text-[12px]">
                        {item?.ratings}
                     </p>
                     <span className="h-3 w-0.5 bg-gray-500"></span>
                     <p className="text-gray-600 text-[12px]">
                        {item?.sale} terjual
                     </p>
                  </div>
               </div>
            ))}
         </Slider>
      </main>
   );
}
