import { NavLink, Outlet } from "react-router-dom";

const categories = [
  { name: "Молочная продукция", path: "/catalog/dairy" },
  { name: "Закваски", path: "/catalog/starter" },
  { name: "Специи", path: "/catalog/spices" },
  { name: "Краски", path: "/catalog/colors" },
  { name: "Horeca", path: "/catalog/horeca" },
  { name: "Наполнитель", path: "/catalog/filler" },
  { name: "Консерванты", path: "/catalog/preservatives" },
  { name: "Стабилизаторы", path: "/catalog/stabilizers" },
  { name: "Хлебобулочные изделия", path: "/catalog/bakery" },
  { name: "Сырные изделия", path: "/catalog/cheese" },
];

const Sidebar = () => {
  return (
    <div className="flex min-h-screen bg-white text-black">
      {/* Sidebar */}
      <aside className="w-64 border-r p-6 bg-white shadow-sm">
        <h2 className="text-xl font-semibold mb-6">Каталог</h2>
        <ul className="space-y-4 text-gray-600">
          {categories.map(({ name, path }) => (
            <li key={path}>
              <NavLink
                to={path}
                className={({ isActive }) =>
                  `block transition-colors duration-200 ${
                    isActive
                      ? "text-yellow-500 font-semibold"
                      : "hover:text-black"
                  }`
                }
              >
                {name}
              </NavLink>
            </li>
          ))}
        </ul>
      </aside>

      {/* Content */}
      <Outlet />
    </div>
  );
};

export default Sidebar;
