import makanan_kering from "../../assets/makanan_kering.webp";
import figure from "../../assets/figure.webp";
import tas_selempang from "../../assets/tas_selempang.webp";
import flat_shoes from "../../assets/flat_shoes.webp";
import toples from "../../assets/toples.webp";
import harddisk from "../../assets/harddisk.webp";
import { TabsHome } from "./tabs";
import { SelectedCategory } from "./selectedCategory";
import { AllCategory } from "./allCategory";
export function MainCategory() {
   const asset = [
      {
         img: makanan_kering,
         path: "/",
      },
      {
         img: figure,
         path: "/",
      },
      {
         img: tas_selempang,
         path: "/",
      },
      {
         img: toples,
         path: "/",
      },
      {
         img: harddisk,
         path: "/",
      },
   ];
   return (
      <main className="mx-auto w-[88%] h-[300px] rounded-xl shadow-[2px_2px_10px_2px_rgba(5,5,4,0.2)] mt-[25px] font-openSauceOne">
         <div className="flex justify-between py-[20px] px-[16px]">
            <SelectedCategory asset={asset} />
            <div className="flex flex-col gap-[26px] w-[50%]">
               <h1 className="text-[24px] font-bold">
                  Top up & Tagihan{" "}
                  <span className="text-main-green text-[14px] cursor-pointer hover:underline">
                     Lihat Semua
                  </span>
               </h1>
               <div className="w-[573px] h-[135px] border rounded-lg">
                  <TabsHome />
               </div>
            </div>
         </div>
         <div className="px-[16px] mx-auto">
            <AllCategory />
         </div>
      </main>
   );
}
