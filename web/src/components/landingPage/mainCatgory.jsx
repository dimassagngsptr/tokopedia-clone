import makanan_kering from "../../assets/makanan_kering.webp";
import figure from "../../assets/figure.webp";
import tas_selempang from "../../assets/tas_selempang.webp";
import flat_shoes from "../../assets/flat_shoes.webp";
import { TabsHome } from "./tabs";
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
         img: flat_shoes,
         path: "/",
      },
   ];
   return (
      <main className="mx-auto w-[88%] h-[300px] rounded-lg shadow-[2px_2px_10px_2px_rgba(5,5,4,0.2)] mt-[25px] font-openSauceOne">
         <div className="flex py-[20px] px-[16px] gap-[20px]">
            <div className="flex flex-col gap-[26px]">
               <h1 className="text-[24px] font-bold">Kategory Pilihan</h1>
               <div className="flex gap-[20px]">
                  {asset?.map((item, idx) => (
                     <div
                        className="h-[128px] w-[128px] border border-gray-200 rounded-lg cursor-pointer"
                        key={idx}>
                        <img src={item?.img} className="rounded-lg" />
                     </div>
                  ))}
               </div>
            </div>
            <div className="flex flex-col gap-[26px]">
               <h1 className="text-[24px] font-bold">Top up & Tagihan</h1>
               <div className="w-[678px] h-[135px] border rounded-lg">
                  <TabsHome />
               </div>
            </div>
         </div>
      </main>
   );
}
