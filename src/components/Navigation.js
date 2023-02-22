import { NavLink } from "react-router-dom";

const items = [
  { name: "Products", to: "/" },
  { name: "Users", to: "/users" },
  { name: "Verification", to: "/verification" },
];

const Navigation = () => {
  return (
    <nav className="flex items-center justify-between border-b bg-slate-100 px-8 font-bold shadow">
      <ul className="flex items-center gap-x-3.5">
        {items.map((item) => (
          <li key={item.to} className="relative flex items-center">
            <NavLink
              to={item.to}
              className={({ isActive }) =>
                isActive
                  ? "border-b-2 !border-sky-500 py-4 px-0.5 text-sky-500"
                  : "py-4 px-0.5 hover:text-sky-500/90"
              }
            >
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
