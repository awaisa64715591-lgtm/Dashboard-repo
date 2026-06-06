function Sidebar({ setPage }) {
  return (
    <div className="w-64 h-screen bg-gray-800 text-white p-5">
      <h2 className="text-xl mb-5">Menu</h2>

      <ul className="space-y-3">
        <li onClick={() => setPage("home")} className="cursor-pointer">Home</li>
        <li onClick={() => setPage("post")} className="cursor-pointer">Create Post</li>
        <li onClick={() => setPage("settings")} className="cursor-pointer">Settings</li>
        <li onClick={() => setPage("logout")} className="cursor-pointer text-red-400">Logout</li>
      </ul>
    </div>
  );
}

export default Sidebar;