import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import ValueMedi from "./pages/ValueMedi";
import Layout from "./pages/Layout";
import Career from "./pages/Career";
import ContactUs from "./pages/ContactUs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "/valuemedi", element: <ValueMedi /> },
      { path: "/career", element: <Career /> },
      { path: "/contact-us", element: <ContactUs /> },
    ],
  },
]);

export default router;
