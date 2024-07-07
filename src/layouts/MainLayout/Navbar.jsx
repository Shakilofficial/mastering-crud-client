import { NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <div className="w-full max-w-[1250px] px-[25px] mx-auto flex justify-between items-center py-4">
      {/* Mobile Menu Button */}
      <div className="flex-none lg:hidden">
        <label
          htmlFor="my-drawer-3"
          aria-label="open sidebar"
          className="btn btn-square btn-ghost"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-6 h-6 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </label>
      </div>

      {/* Logo */}
      <div className="flex-1 text-xl font-bold text-primary">Clean Co</div>

      {/* Desktop Menu */}
      <div className="flex-none hidden lg:block">
        <div className="flex items-center gap-2">
          {/* Navigation Links */}
          <NavLink
            to="/"
            exact
            className="btn btn-sm btn-ghost"
            activeClassName="btn-primary"
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className="btn btn-sm btn-ghost"
            activeClassName="btn-primary"
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className="btn btn-sm btn-ghost"
            activeClassName="btn-primary"
          >
            Contact
          </NavLink>
          <NavLink
            to="/services"
            className="btn btn-sm btn-ghost"
            activeClassName="btn-primary"
          >
            Services
          </NavLink>

          {/* User Authentication Links or Dropdown */}
          {user ? (
            // If user is logged in
            <div className="relative">
              <button className="btn btn-sm btn-ghost">
                {user.displayName}
              </button>
              <div className="dropdown dropdown-end">
                <ul className="menu dropdown-content w-52">
                  <li>
                    <NavLink
                      to="/user"
                      className="block px-4 py-2 hover:bg-base-300 rounded-lg"
                    >
                      Profile
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/user/orders"
                      className="block px-4 py-2 hover:bg-base-300 rounded-lg"
                    >
                      Orders
                    </NavLink>
                  </li>
                  <li>
                    <div
                      onClick={logout}
                      className="block px-4 py-2 hover:bg-base-300 rounded-lg text-red-500 cursor-pointer"
                    >
                      Logout
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          ) : (
            // If user is not logged in
            <NavLink
              to="/login"
              className="btn btn-sm btn-primary"
              activeClassName="btn-active"
            >
              Login
            </NavLink>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
