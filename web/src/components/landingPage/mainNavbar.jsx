import navLogo from "../../assets/logo-nav.svg";
import { ButtonNav } from "./button";
import { NavSearch } from "./navSearch";
import { NavLocation } from "./navLocation";
export function MainNavbar() {
   const recomendations = [
      {
         name: "Oxva Slim",
         path: "/",
      },
      {
         name: "Oxva Slim",
         path: "/",
      },
      {
         name: "Oxva Slim",
         path: "/",
      },
      {
         name: "Oxva Slim",
         path: "/",
      },
      {
         name: "Oxva Slim",
         path: "/",
      },
      {
         name: "Oxva Slim",
         path: "/",
      },
   ];
   return (
      <main className="z-50 bg-white mt-[15px] px-[36px] font-openSauceOne border-b pb-1">
         <div className="flex justify-between">
            <a href="/">
               <img
                  src={navLogo}
                  alt="Tokopedia.com"
                  className="mt-[8px] h-[35px] w-[200px]"
               />
            </a>
            <NavSearch recomendations={recomendations} />
            <div className="w-[300px] flex flex-col justify-between items-end">
               <div className="flex gap-[15px]">
                  <ButtonNav variants={"outlined"} title={"Masuk"} />
                  <ButtonNav
                     variants={"filled"}
                     title={"Daftar"}
                     backgroundColor={true}
                  />
               </div>
               <NavLocation />
            </div>
         </div>
      </main>
   );
}
