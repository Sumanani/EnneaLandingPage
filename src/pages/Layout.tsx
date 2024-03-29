import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import NavBar from "../components/Navbar";

const Layout = () => (
  <>
    <NavBar />
    <Outlet />
    <Footer />
  </>
);

export default Layout;
