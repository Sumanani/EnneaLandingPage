function NavBar() {
  return (
    <div className="navbar bg-[#c4f0fe]">
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
              <a>Our Services</a>
            </li>
            <li>
              <a>ValueMedi</a>
              <ul className="p-2">
                <li>
                  <a>ValueMedi</a>
                </li>
                <li>
                  <a>Calculator</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Career</a>
            </li>
            <li>
              <a>Contact Us</a>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost hidden lg:flex normal-case text-2xl">
          ennea
        </a>
      </div>
      <div className="navbar-end">
        <a className="btn btn-ghost lg:hidden normal-case text-xl">ennea</a>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal font-medium text-base px-1">
            <li>
              <a>Our Services</a>
            </li>
            <li tabIndex={0}>
              <details>
                <summary>ValueMedi</summary>
                <ul className="p-2 text-base font-normal">
                  <li>
                    <a>ValueMedi</a>
                  </li>
                  <li>
                    <a>Calculator</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <a>Career</a>
            </li>
            <li>
              <a>Contact Us</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
