import { useState } from "react";

function CreatePost({ setPost, setPage }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handlePublish = () => {
    // 👉 fake long content (500 lines idea)
    const longText = content || "This is a demo dashboard paragraph. ".repeat(200);

    setPost({
      title: title || "Admin App",
      content: longText,
    });

    setPage("viewPost"); // 👉 new page open
  };

  return (
    <div className="max-w-md mx-auto bg-white text-black p-6 rounded shadow">
      <h2 className="text-xl font-bold mb-4">Create Post</h2>

      <input
        placeholder="Title"
        className="w-full border p-2 mb-3 rounded"
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        placeholder="Write something..."
        className="w-full border p-2 mb-3 rounded"
        onChange={(e) => setContent(e.target.value)}
      />

      <button
        onClick={handlePublish}
        className="bg-green-500 text-white px-4 py-2 rounded"
      >
        Publish
      </button>
    </div>
  );
}

export default CreatePost;  