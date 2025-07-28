import { NavLink, Outlet, useLocation } from "react-router-dom";

const categories = [
  { name: "Молочная продукция", path: "/catalog/dairy" },
  { name: "Специализированные жиры", path: "/catalog/specialized-fats" },
  { name: "Horeca", path: "/catalog/horeca" },
  { name: "Пищевая химия", path: "/catalog/food-chemistry" },
  { name: "Хлебобулочные изделия", path: "/catalog/bakery" },
  { name: "Кондитерские направление", path: "/catalog/confectionery" },
];

const SidebarTabs = () => {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-white text-black mb-20">
      {/* Мобильные табы */}
      <nav className="md:hidden flex overflow-x-auto border-b bg-white shadow-sm">
        {categories.map(({ name, path }) => {
          const isActive = location.pathname === path;
          return (
            <NavLink
              key={path}
              to={path}
              className={`whitespace-nowrap px-4 py-2 text-sm font-medium transition-colors ${
                isActive
                  ? "text-yellow-500 border-b-2 border-yellow-500"
                  : "text-gray-600 hover:text-black"
              }`}
            >
              {name}
            </NavLink>
          );
        })}
      </nav>

      {/* Десктопный сайдбар */}
      <aside className="hidden md:block w-64 border-r p-6 bg-white ">
        <h2 className="text-xl font-semibold mb-6">Каталог</h2>
        <ul className="space-y-4 text-gray-600 font-[Helvetica]">
          {categories.map(({ name, path }) => (
            <li key={path}>
              <NavLink
                to={path}
                className={({ isActive }) =>
                  `block transition-all duration-200 ${
                    isActive
                      ? "text-yellow-500 font-semibold border-l-4 border-yellow-500 pl-2 bg-yellow-50"
                      : "hover:text-black hover:pl-2"
                  }`
                }
              >
                {name}
              </NavLink>
            </li>
          ))}
        </ul>
      </aside>

      {/* Контент */}
      <main className="flex-1 p-4 md:p-6 font-[Helvetica] bg-gray-50 min-h-screen">
        <Outlet />
      </main>
    </div>
  );
};

export default SidebarTabs;
