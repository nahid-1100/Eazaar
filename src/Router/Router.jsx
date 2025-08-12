import { createBrowserRouter } from "react-router";

import RootLayout from "../Layout/RootLayout/RootLayout";
import Home from "../pages/Home/Home/Home";
import ProductsDetails from "../pages/ProductsDetails/ProductsDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/details",
        element: <ProductsDetails></ProductsDetails>,
      },
    ],
  },
]);

export default router;
