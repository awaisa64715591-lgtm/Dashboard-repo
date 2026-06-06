import { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import Login from "./Login";
import Logout from "./Logout";
import Home from "./Home";
import CreatePost from "./CreatePost";
import Settings from "./Settings";
import PostPage from "./PostPage";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [page, setPage] = useState("home");
  const [darkMode, setDarkMode] = useState(true);

  // 👉 NEW STATE
  const [post, setPost] = useState(null);

  if (!loggedIn) {
    return <Login setLoggedIn={setLoggedIn} />;
  }

  return (
    <div className={`${darkMode ? "bg-gray-900 text-white" : "bg-gray-100"} min-h-screen`}>

      <Header darkMode={darkMode} setDarkMode={setDarkMode} />

      <div className="flex">
        <Sidebar setPage={setPage} />

        <main className="flex-1 p-6">

          {page === "home" && <Home />}

          {page === "post" && (
            <CreatePost setPost={setPost} setPage={setPage} />
          )}

          {page === "viewPost" && post && (
            <PostPage post={post} />
          )}

          {page === "settings" && <Settings />}

          {page === "logout" && <Logout setLoggedIn={setLoggedIn} />}

        </main>
      </div>

      <Footer />
    </div>
  );
}

export default App;