function Logout({ setLoggedIn }) {
  return (
    <div className="text-center mt-20">
      <h2 className="text-xl mb-4">Are you sure?</h2>

      <button
        onClick={() => setLoggedIn(false)}
        className="bg-red-500 text-white px-4 py-2 rounded"
      >
        Logout
      </button>
    </div>
  );
}

export default Logout;