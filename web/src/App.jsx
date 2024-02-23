import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/homePage";
import LoginPage from "./pages/login";
import { Analytics } from "@vercel/analytics/react";

const router = createBrowserRouter([
   {
      path: "/",
      element: <HomePage />,
   },
   {
      path: "/login",
      element: <LoginPage />,
   },
]);
function App() {
   return (
      <>
         <RouterProvider router={router}></RouterProvider>
         <Analytics />
      </>
   );
}

export default App;
