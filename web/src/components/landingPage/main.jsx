import { HomeCarousel } from "./carousel";
import { HeadBars } from "./headBar";
import { MainCategory } from "./mainCatgory";
import { MainNavbar } from "./mainNavbar";

function Home() {
   return (
      <main className="h-[1000px]">
         <HeadBars />
         <MainNavbar />
         <HomeCarousel />
         <MainCategory />
      </main>
   );
}

export default Home;
