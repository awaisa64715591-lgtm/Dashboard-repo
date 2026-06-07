function Card({ title, value }) {
  return (
    <div className="p-6 rounded-xl shadow bg-white dark:bg-[#111827] hover:-translate-y-1 transition">

      <h3 className="text-gray-500">{title}</h3>
      <p className="text-2xl font-bold mt-2">{value}</p>

    </div>
  );
}

function Home() {
  return (
    <div className="grid md:grid-cols-3 gap-6">

      <Card title="Users" value="1,240" />
      <Card title="Revenue" value="$12,400" />
      <Card title="Orders" value="320" />

    </div>
  );
}

export default Home;