function Footer({ darkMode }) {
  return (
    <footer
      className={`mt-auto border-t transition-all duration-300 ${
        darkMode
          ? "bg-[#0f172a] border-gray-700 text-gray-400"
          : "bg-white border-gray-200 text-gray-600"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between">

        {/* Left Side */}
        <p className="text-sm">
          © {new Date().getFullYear()} My Dashboard. All rights reserved.
        </p>

        {/* Middle Links */}
        <div className="flex space-x-4 mt-3 md:mt-0">
          <a href="#" className="hover:text-blue-500 transition">Privacy</a>
          <a href="#" className="hover:text-blue-500 transition">Terms</a>
          <a href="#" className="hover:text-blue-500 transition">Support</a>
        </div>

        {/* Right Side */}
        <p className="text-sm">
          Built with ❤️ using React
        </p>

      </div>
    </footer>
  );
}

export default Footer;