import { IconButton } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { CartMenu } from "./cartMenu";

export function NavSearch({ recomendations }) {
   return (
      <div className="flex flex-col w-[90%] ml-[42px]">
         <div className="flex items-center gap-[24px]">
            <h2 className="font-semibold">Kategori</h2>
            <div className="w-[90%] border rounded-lg border-gray-500 h-[45px] gap-2 flex items-center justify-between">
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
                  placeholder="Cari di Tokopedia"
                  type="text"
                  className="w-[93%] h-[100%] border rounded-l-none rounded-lg border-l-0 outline-none focus:border-none focus:border-transparent"
               />
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
                     className="text-gray-600 font-normal">
                     {recomend?.name}
                  </Link>
               ))}
            </div>
         </div>
      </div>
   );
}
