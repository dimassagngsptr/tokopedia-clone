import { Link } from "react-router-dom";

export function HeadBars() {
   const links = [
      { title: "Tentang Tokopedia", path: "/" },
      { title: "Mitra Tokopedia", path: "/" },
      { title: "Mulai Berjualan", path: "/" },
      { title: "Promo", path: "/" },
      { title: "Tokopedia Care", path: "/" },
   ];
   return (
      <main className="px-[35px] flex justify-between items-center bg-main-gray h-[35px] text-gray-600 font-openSauceOne text-[14px] font-semibold">
         <div className="flex gap-[10px] items-center cursor-pointer">
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
                  d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
               />
            </svg>

            <h1 className="hover:text-main-green">Download Tokopedia App</h1>
         </div>
         <div className="flex gap-[36px]">
            {links?.map((item, idx) => (
               <Link
                  key={idx}
                  to={item?.path}
                  className="hover:text-main-green">
                  {item?.title}
               </Link>
            ))}
         </div>
      </main>
   );
}
