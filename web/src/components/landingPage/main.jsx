import { Footer } from "../footer/main";
import { Card } from "./card";
import { HomeCarousel } from "./carousel";
import { HeadBars } from "./headBar";
import { MainCategory } from "./mainCatgory";
import { MainNavbar } from "./mainNavbar";

function Home() {
   return (
      <main className="h-screen">
         <HeadBars />
         <MainNavbar />
         <HomeCarousel />
         <MainCategory />
         <Card />
         <Footer />
      </main>
   );
}

export default Home;
