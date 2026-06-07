function Home() {

  function goDashboard() {
    window.location.href = "/dashboard";
  }

  function toggleTheme() {
    document.body.classList.toggle("dark");
  }

  return (
    <div className="min-h-screen bg-gray-100">

      {/* NAVBAR */}
      <nav className="flex justify-between bg-gray-900 text-white p-4">
        <h1>DASHBOARD</h1>
        <div>
          <a className="mx-2" href="/">Home</a>
          <a className="mx-2" href="/signup">Signup</a>
          <a className="mx-2" href="/login">Login</a>
          <a className="mx-2" href="/dashboard">Dashboard</a>
        </div>
      </nav>

      {/* HERO */}
      <div className="text-center py-20 bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
        <h1 className="text-4xl font-bold">Welcome to Your Dashboard</h1>
        <p className="mt-2">Manage your account easily</p>

        <button
          onClick={goDashboard}
          className="mt-5 bg-black px-4 py-2 rounded"
        >
          Go to Dashboard
        </button>
      </div>

      {/* BUTTON */}
      <div className="text-center my-5">
        <button
          onClick={toggleTheme}
          className="bg-gray-900 text-white px-4 py-2 rounded"
        >
          Dark Mode
        </button>
      </div>

      {/* CARDS */}
      <div className="flex flex-wrap justify-center gap-5 p-5">
        <div className="bg-white p-5 shadow rounded w-48 text-center">👤 Profile</div>
        <div className="bg-white p-5 shadow rounded w-48 text-center">📊 Analytics</div>
        <div className="bg-white p-5 shadow rounded w-48 text-center">⚙️ Settings</div>
        <div className="bg-white p-5 shadow rounded w-48 text-center">🔒 Security</div>
      </div>

    </div>
  );
}

export default Home;
