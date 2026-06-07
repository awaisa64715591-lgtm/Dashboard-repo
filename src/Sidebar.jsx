import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <div className="w-64 h-screen p-5 bg-[#111827] border-r border-gray-700">

      <h2 className="text-xl font-bold mb-6">Menu</h2>

      <div className="space-y-2">

        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "block bg-blue-600 p-2 rounded"
              : "block hover:bg-gray-700 p-2 rounded"
          }
        >
          🏠 Home
        </NavLink>

        <NavLink
          to="/services"
          className={({ isActive }) =>
            isActive
              ? "block bg-blue-600 p-2 rounded"
              : "block hover:bg-gray-700 p-2 rounded"
          }
        >
          🚀 Services
        </NavLink>

        <NavLink
          to="/logout"
          className="block text-red-400 hover:bg-red-500 hover:text-white p-2 rounded transition"
        >
          🚪 Logout
        </NavLink>

      </div>

      <p className="text-gray-500 text-sm mt-10">
        v1.0 Dashboard
      </p>

    </div>
  );
}

export default Sidebar;