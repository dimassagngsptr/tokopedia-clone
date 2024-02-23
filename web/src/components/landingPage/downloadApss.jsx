import qr_download from "../../assets/qr_download.png";
import appstore from "../../assets/appstore.svg";
import playstore from "../../assets/playstore.svg";
export function DownloadApss({ hovered, setHovered }) {
   return (
      <main
         className={`${
            hovered === true ? "absolute left-0 top-8 z-10" : "hidden"
         }`}>
         <div
            className="min-w-[450px] h-[250px] px-3 rounded-lg items-center shadow-xl bg-white flex gap-2 justify-around"
            onMouseLeave={() => setHovered(false)}>
            <img
               src={qr_download}
               className="h-[65%] border object-fill border-main-green p-2 rounded-lg"
            />
            <div className="flex flex-col items-center gap-5">
               <p className="text-center text-[16px] text-gray-900">
                  Scan this QR or download app from:
               </p>
               <div className="flex flex-col gap-3">
                  <img src={playstore} className="h-[10%] w-[100px]" />
                  <img src={appstore} className="h-[10%] w-[100px]" />
               </div>
            </div>
         </div>
      </main>
   );
}
