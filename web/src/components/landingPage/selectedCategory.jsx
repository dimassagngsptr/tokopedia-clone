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
         className="w-[30px] h-[30px] rounded-full absolute top-14 -right-4 cursor-pointer text-gray-500 shadow-lg hover:scale-110 hover:bg-white">
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
         className="w-[30px] h-[30px] rounded-full absolute top-14 -left-4 z-10 cursor-pointer text-gray-500 shadow-lg hover:scale-110 hover:bg-white">
         <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5 8.25 12l7.5-7.5"
         />
      </svg>
   );
}
export function SelectedCategory({ asset }) {
   const settings = {
      className: "slider variable-width",
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      variableWidth: true,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
   };

   return (
      <div className="flex flex-col gap-[26px] w-[45%]">
         <h1 className="text-[24px] font-bold">Kategory Pilihan</h1>
         <div className="slider-container w-full max-w-screen-lg">
            <Slider {...settings}>
               {asset?.map((item, idx) => (
                  <div
                     onClick={() => alert(idx)}
                     className="mx-2 h-[128px] max-w-[128px] border border-gray-200 rounded-lg cursor-pointer"
                     key={idx}>
                     <img
                        src={item?.img}
                        className="rounded-lg w-full h-full object-cover"
                        alt={`item-${idx}`}
                     />
                  </div>
               ))}
            </Slider>
         </div>
      </div>
   );
}
