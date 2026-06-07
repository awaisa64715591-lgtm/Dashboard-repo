function Services() {
  return (
    <div className="grid md:grid-cols-3 gap-6">

      <div className="p-6 rounded-xl shadow bg-white dark:bg-[#111827] hover:-translate-y-1 transition">
        <h2 className="font-bold">Web Development</h2>
        <p className="text-gray-500 mt-2">Modern responsive websites</p>
      </div>

      <div className="p-6 rounded-xl shadow bg-white dark:bg-[#111827] hover:-translate-y-1 transition">
        <h2 className="font-bold">UI/UX Design</h2>
        <p className="text-gray-500 mt-2">Clean modern design</p>
      </div>

      <div className="p-6 rounded-xl shadow bg-white dark:bg-[#111827] hover:-translate-y-1 transition">
        <h2 className="font-bold">Backend APIs</h2>
        <p className="text-gray-500 mt-2">Fast secure APIs</p>
      </div>

    </div>
  );
}

export default Services;