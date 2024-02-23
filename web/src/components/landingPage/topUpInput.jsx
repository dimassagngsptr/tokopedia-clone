import { Button, Option, Select } from "@material-tailwind/react";
import { useState } from "react";

export function TopUpInput() {
   const [data, setData] = useState();
   return (
      <main>
         <div className="flex justify-between items-center font-openSauceOne">
            <div>
               <p className="font-semibold text-[14px]">Nomor Telepon</p>
               <input
                  onChange={(e) => setData(e?.target?.value)}
                  value={data}
                  type="text"
                  placeholder="Masukan Nomor"
                  className="border border-gray-400 rounded-lg w-[223px] h-[38px] px-2 focus:outline focus:outline-main-green"
               />
            </div>
            <div>
               <p className="font-semibold text-[14px]">Nominal</p>
               <select className="px-2 w-[200px] h-[38px] rounded-lg border border-gray-400 focus:outline focus:outline-main-green"></select>
            </div>
            <Button
               disabled={!data}
               className={`${
                  data?.length >= 10
                     ? " bg-main-green text-white"
                     : "bg-gray-300 cursor-not-allowed text-gray-500"
               } relative top-3 shadow-none hover:shadow-none`}
               onClick={() => alert("Fitur ini belum tersedia :(")}>
               Beli
            </Button>
         </div>
      </main>
   );
}
