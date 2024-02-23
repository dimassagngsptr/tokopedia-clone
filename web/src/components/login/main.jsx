import { useState } from "react";
import { ButtonNav } from "../landingPage/button";
import { Dialog, DialogBody, DialogHeader } from "@material-tailwind/react";

export function SignIn() {
   const [open, setOpen] = useState(false);
   const handleOpen = () => setOpen(!open);
   return (
      <>
         <ButtonNav
            variants={"outlined"}
            title={"Masuk"}
            handleOpen={handleOpen}
         />
         <Dialog size={"xs"} open={open} handler={handleOpen}>
            <DialogHeader>
               <div className="w-full flex flex-col items-end gap-4 text-end border-b">
                  <svg
                     onClick={handleOpen}
                     xmlns="http://www.w3.org/2000/svg"
                     fill="none"
                     viewBox="0 0 24 24"
                     strokeWidth={1.5}
                     stroke="currentColor"
                     className="w-6 h-6 cursor-pointer">
                     <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18 18 6M6 6l12 12"
                     />
                  </svg>
                  <div className="flex justify-around items-center w-full">
                     <p className="font-bold">Masuk</p>
                     <span className="h-5 w-0.5 bg-gray-400"></span>
                     <p className="font-normal text-[16px] cursor-pointer text-main-green">
                        Daftar
                     </p>
                  </div>
               </div>
            </DialogHeader>
            <DialogBody>
               <div className="flex flex-col items-center w-full mt-[60px] font-openSauceOne pb-4">
                  <div className="w-full relative flex justify-center items-center">
                     <p className="absolute -top-6 left-10 text-[14px] font-bold">
                        Nomor HP atau Email
                     </p>
                     <input
                        type="text"
                        className="border px-4 w-[80%] h-[38px] rounded-lg focus:outline-main-green"
                     />
                     <p className="absolute -bottom-6 right-10 text-[12px] text-main-green cursor-pointer hover:underline">
                        Butuh bantuan?
                     </p>
                  </div>
                  <div className="mt-[42px] w-[80%] rounded-lg py-2 bg-gray-200 text-center font-bold cursor-pointer">
                     <p>Selanjutnya</p>
                  </div>
                  <div className="flex items-center gap-2 my-[28px] justify-around">
                     <span className="h-0.5 w-[80px] bg-gray-400"></span>
                     <p className="text-[12px]">atau masuk dengan</p>
                     <span className="h-0.5 w-[80px] bg-gray-400"></span>
                  </div>
                  <div className="w-[80%] cursor-pointer border border-gray-400 rounded-lg py-2 justify-center flex items-center gap-2">
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
                           d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 3.75 9.375v-4.5ZM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 0 1-1.125-1.125v-4.5ZM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 13.5 9.375v-4.5Z"
                        />
                        <path
                           strokeLinecap="round"
                           strokeLinejoin="round"
                           d="M6.75 6.75h.75v.75h-.75v-.75ZM6.75 16.5h.75v.75h-.75v-.75ZM16.5 6.75h.75v.75h-.75v-.75ZM13.5 13.5h.75v.75h-.75v-.75ZM13.5 19.5h.75v.75h-.75v-.75ZM19.5 13.5h.75v.75h-.75v-.75ZM19.5 19.5h.75v.75h-.75v-.75ZM16.5 16.5h.75v.75h-.75v-.75Z"
                        />
                     </svg>

                     <p className="text-gray-400 font-bold">Scan Kode QR</p>
                  </div>
                  <div className="w-[80%] cursor-pointer border border-gray-400 rounded-lg py-2 justify-center flex items-center gap-2 mt-[8px]">
                     <p className="text-gray-700 font-bold">Metode Lain</p>
                  </div>
               </div>
            </DialogBody>
         </Dialog>
      </>
   );
}
