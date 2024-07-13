import { NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const navItems = [
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Contact", path: "/contact" },
];

const Sidebar = () => {
  const { user, logout } = useAuth();
  return (
    <div className="flex flex-col justify-center items-center gap-1.5 pt-8">
      {navItems.map((item) => (
        <NavLink
          key={item.name}
          to={item.path}
          className={({ isActive }) =>
            isActive ? "btn btn-primary" : "btn btn-ghost"
          }
        >
          {item.name}
        </NavLink>
      ))}
      {user?.email ? (
        <div className="dropdown dropdown-end ">
          <label tabIndex={0} className="cursor-pointer">
            <div className="avatar">
              <div className="w-10 rounded-full">
                <img
                  src={
                    user.photoURL
                      ? user.photoURL
                      : "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=1964&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  }
                  alt="User Avatar"
                />
              </div>
            </div>
          </label>
          <div
            tabIndex={0}
            className="dropdown-content z-[1] -left-14 flex justify-center items-center menu mt-2 p-2 shadow bg-base-100 rounded-box w-40"
          >
            <NavLink
              to="/user"
              className="px-4 py-2 hover:bg-base-300 rounded-lg"
            >
              Profile
            </NavLink>
            <NavLink
              to="/user/orders"
              className="px-4 py-2 hover:bg-base-300 rounded-lg"
            >
              Orders
            </NavLink>

            <div
              onClick={logout}
              className="cursor-pointer text-red-500 px-4 py-2 hover:bg-base-300 rounded-lg"
            >
              Logout
            </div>
          </div>
        </div>
      ) : (
        <NavLink
          to="/login"
          className={({ isActive }) =>
            isActive ? "btn btn-primary btn-sm" : "btn btn-ghost btn-sm"
          }
        >
          Login
        </NavLink>
      )}
    </div>
  );
};

export default Sidebar;
