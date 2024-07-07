import { NavLink } from "react-router-dom";

const navItems = [
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
  { name: "Login", path: "/login" },
];

const Sidebar = () => {
  return (
    <div className="flex flex-col gap-1.5 pt-8">
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
    </div>
  );
};

export default Sidebar;
