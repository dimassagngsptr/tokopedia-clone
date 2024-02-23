import { IconButton } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { CartMenu } from "./cartMenu";
import { useState } from "react";

export function NavSearch({ recomendations, setHover }) {
   const [focus, setFocus] = useState(false);
   const [data, setData] = useState();
   return (
      <div className="flex flex-col w-[90%] ml-[42px]">
         <div className="flex items-center gap-[24px]">
            <h2
               className="font-semibold"
               onMouseEnter={() => setHover(true)}
               onMouseLeave={() => setHover(false)}>
               Kategori
            </h2>
            <div
               className={`${
                  focus === true
                     ? "w-[90%] border rounded-lg border-main-green h-[40px] gap-2 flex items-center justify-between"
                     : "w-[90%] border rounded-lg border-gray-500 h-[40px] gap-2 flex items-center justify-between"
               }`}>
               <IconButton className="bg-white shadow-none text-gray-500 h-[100%] hover:shadow-none">
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
                        d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                     />
                  </svg>
               </IconButton>
               <input
                  onFocus={() => setFocus(true)}
                  onBlur={() => setFocus(false)}
                  onChange={(e) => setData(e?.target?.value)}
                  value={data}
                  placeholder="Cari di Tokopedia"
                  type="text"
                  className="w-[93%] h-[100%] border rounded-l-none rounded-lg border-l-0 outline-none focus:border-none focus:border-transparent"
               />
               <div
                  className={`${
                     focus === true
                        ? "absolute px-2 py-1 top-24 h-[100px] w-[670px] rounded-md z-30 shadow-md bg-white"
                        : "hidden"
                  }`}>
                  <p className="text-[12px] font-bold text-gray-500">
                     Pencarian untuk : {data}
                  </p>
               </div>
            </div>
            <div className="ml-[10px]">
               <CartMenu />
            </div>
            <span className="h-[30px] w-0.5 bg-main-gray"></span>
         </div>
         <div className="flex justify-between items-start ml-[90px] mt-[20px]">
            <div className="flex gap-[12px]">
               {recomendations?.map((recomend, idx) => (
                  <Link
                     key={idx}
                     to={recomend?.path}
                     className="text-gray-600 text-[12px] font-normal hover:text-main-green">
                     {recomend?.name}
                  </Link>
               ))}
            </div>
         </div>
      </div>
   );
}
