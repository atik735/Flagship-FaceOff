import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import Root from "../Root/Root"; //main layout
import Favorites from "../pages/Favorites";
import About from "../pages/About";
import PhoneDetails from "../pages/PhoneDetails";
import ErrorPage from "../pages/ErrorPage";

const router = createBrowserRouter([
    {
      path:"/",
      Component:Root,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
            index:true,
            hydrateFallbackElement:<p>Loading.....</p>,
            loader:()=>fetch("/phones.json"),
            Component:Home
        },
        {
          path:"/favorites",
          Component:Favorites
        },
        {
          path:"/about",
          Component:About
        },
        {
          path:"/phone-details/:id",
          loader:()=>fetch("/phones.json"),
          Component:PhoneDetails
        },
      ]
    },
  ])
  
  export default router