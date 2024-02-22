import {
   IconButton,
   Menu,
   MenuHandler,
   MenuItem,
   MenuList,
} from "@material-tailwind/react";
import emptyIcon from "../../assets/empty-state-pp.png";
import { ButtonNav } from "./button";

export function CartMenu() {
   return (
      <Menu
         allowHover={true}
         animate={{
            mount: { y: 25 },
            unmount: { y: 0 },
         }}>
         <MenuHandler>
            <IconButton className="bg-white hover:bg-white shadow-none hover:shadow-none text-gray-800 outline-none">
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
                     d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                  />
               </svg>
            </IconButton>
         </MenuHandler>
         <MenuList className="outline-none">
            <div className="w-[450px] h-[300px] flex flex-col gap-3 items-center text-black outline-none">
               <img src={emptyIcon} className="object-fill w-[30%] h-[50%]" />
               <h1 className="text-[25px] font-bold">
                  Wah, keranjang belanjamu kosong
               </h1>
               <p className="text-gray-500">Yuk, isi dengan barang impianmu!</p>
               <ButtonNav title={"Mulai Belanja"} variants={"outlined"} />
            </div>
         </MenuList>
      </Menu>
   );
}
