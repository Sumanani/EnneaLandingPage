import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import ValueMedi from "./pages/ValueMedi";
import Layout from "./pages/Layout";
import Career from "./pages/Career";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "/valuemedi", element: <ValueMedi /> },
      { path: "/career", element: <Career /> },
    ],
  },
]);

export default router;
