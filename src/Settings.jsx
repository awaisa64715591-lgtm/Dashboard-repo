function Settings() {
  return (
    <div className="max-w-md mx-auto bg-white p-6 shadow rounded">
      <h2 className="text-xl font-bold mb-4">Settings</h2>

      <input className="w-full border p-2 mb-3 rounded" placeholder="Username" />
      <input type="password" className="w-full border p-2 mb-3 rounded" placeholder="Password" />

      <button className="bg-purple-500 text-white px-4 py-2 rounded">
        Save
      </button>
    </div>
  );
}

export default Settings;