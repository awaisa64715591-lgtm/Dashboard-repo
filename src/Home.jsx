function Home() {
  return (
    <div className="max-w-md mx-auto bg-white p-6 shadow rounded">
      <h2 className="text-xl font-bold mb-4">Home Form</h2>

      <input className="w-full border p-2 mb-3 rounded" placeholder="Name" />
      <input className="w-full border p-2 mb-3 rounded" placeholder="Email" />

      <button className="bg-blue-500 text-white px-4 py-2 rounded">
        Submit
      </button>
    </div>
  );
}

export default Home;