import React from "react";
import { Link } from "react-router-dom";
import Switch from "./Switch";

const Navbar = () => {
  const handleLogout = () => {
    // Clear localStorage data for this site
    localStorage.removeItem("userEmail");
  };

  return (
    <div>
      <nav
        className="flex w-full flex-wrap items-center justify-between bg-neutral-100 dark:bg-gray-900 py-3 dark:text-neutral-200 shadow-lg lg:flex-wrap lg:justify-start fixed top-0 z-20"
        data-te-navbar-ref=""
      >
        <div className="flex w-full flex-wrap items-center justify-between px-6">
          <Link className="pr-2 text-2xl font-semibold" to="/main">
            Movie App
          </Link>

          {/* Right elements */}
          <div className="relative flex items-center">
            <Switch />
            <div className="relative" data-te-dropdown-ref="">
              <Link to="/" onClick={handleLogout}>
                <span
                  className="block w-full whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-white/30"
                  role="button"
                  data-te-dropdown-item-ref=""
                >
                  Logout
                </span>
              </Link>
            </div>
          </div>
          {/* Right elements */}
        </div>
      </nav>
      <div className="h-[52px]"></div>
    </div>
  );
};

export default Navbar;
