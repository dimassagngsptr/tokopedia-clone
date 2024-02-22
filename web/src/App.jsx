import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/homePage";
import LoginPage from "./pages/login";

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
      </>
   );
}

export default App;
