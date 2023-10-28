import { Link, useLocation } from "react-router-dom";

function NavBar() {
  const { pathname } = useLocation();

  const navBarClassName =
    pathname === "/valuemedi" ? "navbar bg-[#e3f0d3]" : "navbar bg-[#c4f0fe]";

  return (
    <div className={navBarClassName}>
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-md dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="/">Our Services</Link>
            </li>
            <li>
              <Link to="/valuemedi">ValueMedi</Link>
            </li>
            <li>
              <Link to="/career">Career</Link>
            </li>
            <li>
              <Link to="/contact-us">Contact Us</Link>
            </li>
          </ul>
        </div>
        <Link
          to="/"
          className="btn btn-ghost hidden lg:flex normal-case text-2xl"
        >
          ennea
        </Link>
      </div>
      <div className="navbar-end">
        <a className="btn btn-ghost lg:hidden normal-case text-xl">ennea</a>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal font-medium text-base px-1">
            <li>
              <Link to="/">Our Services</Link>
            </li>
            <li>
              <Link to="/valuemedi">ValueMedi</Link>
            </li>
            <li>
              <Link to="/career">Career</Link>
            </li>
            <li>
              <Link to="/contact-us">Contact Us</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
