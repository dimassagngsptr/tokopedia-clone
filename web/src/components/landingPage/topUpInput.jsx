import { Button, Option, Select } from "@material-tailwind/react";

export function TopUpInput() {
   return (
      <main>
         <div className="flex justify-between items-center font-openSauceOne">
            <div>
               <p className="font-semibold text-[14px]">Nomor Telepon</p>
               <input
                  type="text"
                  placeholder="Masukan Nomor"
                  className="border border-gray-400 rounded-lg w-[223px] h-[38px] px-2 focus:outline focus:outline-main-green"
               />
            </div>
            <div>
               <p className="font-semibold text-[14px]">Nominal</p>
               <select className="px-2 w-[200px] h-[38px] rounded-lg border border-gray-400 focus:outline focus:outline-main-green"></select>
            </div>
            <Button className="relative top-3 bg-gray-300 text-gray-500 shadow-none hover:shadow-none">
               Beli
            </Button>
         </div>
      </main>
   );
}
