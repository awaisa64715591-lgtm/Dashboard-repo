function Header({ darkMode, setDarkMode }) {
  return (
    <header className="flex justify-between items-center px-6 py-4 border-b border-gray-700 backdrop-blur">

      <h1 className="text-xl font-bold">Admin Dashboard</h1>

      <div className="flex items-center gap-3">

        <button className="px-3 py-1 rounded bg-gray-700 hover:bg-gray-600 transition">
          🔔
        </button>

        <button
          onClick={() => setDarkMode(!darkMode)}
          className="px-4 py-2 rounded bg-blue-600 hover:bg-blue-500 transition"
        >
          {darkMode ? "☀️ Light" : "🌙 Dark"}
        </button>

      </div>

    </header>
  );
}

export default Header;