import { Carousel, IconButton } from "@material-tailwind/react";
import { useState } from "react";
import carousel_1 from "../../assets/carousel_1.webp";
import carousel_2 from "../../assets/carousel_2.webp";
import carousel_3 from "../../assets/carousel_3.webp";

export function HomeCarousel() {
   const [isHover, setIsHover] = useState(false);
   const items = [
      {
         path: carousel_1,
      },
      {
         path: carousel_2,
      },
      {
         path: carousel_3,
      },
   ];
   return (
      <div
         className="w-[88%] mx-auto h-[320px] mt-[20px]"
         onMouseEnter={() => setIsHover(true)}
         onMouseLeave={() => setIsHover(false)}>
         <Carousel
            loop={true}
            autoplayDelay={3000}
            autoplay={true}
            className="rounded-xl"
            navigation={({ setActiveIndex, activeIndex, length }) => (
               <div className="absolute bottom-4 left-10 z-50 flex -translate-x-5 gap-2">
                  {new Array(length).fill("").map((_, i) => (
                     <span
                        key={i}
                        className={`block h-[6px] w-[6px] cursor-pointer rounded-full transition-all content-[''] ${
                           activeIndex === i
                              ? "w-8 bg-white"
                              : "w-4 bg-white/50"
                        }`}
                        onClick={() => setActiveIndex(i)}
                     />
                  ))}
               </div>
            )}
            prevArrow={({ handlePrev }) => (
               <IconButton
                  variant="text"
                  color="white"
                  size="lg"
                  onClick={handlePrev}
                  className={`${
                     isHover === false
                        ? "bg-transparent -translate-y-2/4 !absolute top-2/4 -left-10 rounded-full text-transparent shadow-none transition duration-500 ease-in-out"
                        : "!absolute top-2/4 -left-4 bg-white rounded-full text-gray-600 shadow-lg -translate-y-2/4 translate-x-0 hover:bg-white hover:scale-110 transition duration-500 ease-in-out"
                  }`}>
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     fill="none"
                     viewBox="0 0 24 24"
                     strokeWidth={1.5}
                     stroke="currentColor"
                     className="w-6 h-6">
                     <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 19.5 8.25 12l7.5-7.5"
                     />
                  </svg>
               </IconButton>
            )}
            nextArrow={({ handleNext }) => (
               <IconButton
                  variant="text"
                  color="white"
                  size="lg"
                  onClick={handleNext}
                  className={`${
                     isHover === false
                        ? "bg-transparent -translate-y-2/4 !absolute top-2/4 -right-10 rounded-full text-transparent shadow-none transition duration-500 ease-in-out"
                        : "!absolute top-2/4 -right-3 bg-white rounded-full text-gray-600 shadow-lg -translate-y-2/4 translate-x-0 hover:bg-white hover:scale-110 transition duration-500 ease-in-out"
                  } transition duration-300`}>
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     fill="none"
                     viewBox="0 0 24 24"
                     strokeWidth={1.5}
                     stroke="currentColor"
                     className="w-6 h-6">
                     <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m8.25 4.5 7.5 7.5-7.5 7.5"
                     />
                  </svg>
               </IconButton>
            )}>
            {items?.map((item, idx) => (
               <img
                  key={idx}
                  src={item?.path}
                  alt="image 1"
                  className="h-full w-full object-fill"
               />
            ))}
         </Carousel>
      </div>
   );
}
