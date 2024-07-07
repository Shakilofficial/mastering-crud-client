import { NavLink } from "react-router-dom";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Contact", path: "/contact" },
  { name: "Login", path: "/login" },
];

const Navbar = () => {
  return (
    <div className="w-full max-w-[1250px] px-[25px] mx-auto">
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
      <div className="flex-1 text-xl font-bold text-primary">BDC</div>
      <div className="flex-none hidden lg:block">
        <div className="flex items-center gap-2">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                isActive ? "btn btn-primary btn-sm" : "btn btn-ghost btn-sm"
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
