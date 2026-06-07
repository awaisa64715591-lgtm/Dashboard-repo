import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

import Login from "./Login";
import Logout from "./Logout";
import Home from "./Home";
import Services from "./Services";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  if (!loggedIn) {
    return <Login setLoggedIn={setLoggedIn} />;
  }

  return (
    <BrowserRouter>
      <div
        className={`min-h-screen flex flex-col transition-all duration-300 ${
          darkMode ? "bg-[#0f172a] text-gray-100" : "bg-gray-100 text-gray-900"
        }`}
      >
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />

        <div className="flex flex-1">
          <Sidebar />

          <main className="flex-1 p-6 transition-all duration-300">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/logout" element={<Logout setLoggedIn={setLoggedIn} />} />
            </Routes>
          </main>
        </div>

        <Footer darkMode={darkMode} />
      </div>
    </BrowserRouter>
  );
}

export default App;