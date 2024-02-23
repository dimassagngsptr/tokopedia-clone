import { Card } from "./card";
import { HomeCarousel } from "./carousel";
import { HeadBars } from "./headBar";
import { MainCategory } from "./mainCatgory";
import { MainNavbar } from "./mainNavbar";

function Home() {
   return (
      <main className="h-[1500px]">
         <HeadBars />
         <MainNavbar />
         <HomeCarousel />
         <MainCategory />
         <Card />
      </main>
   );
}

export default Home;
