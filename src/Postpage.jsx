function PostPage({ post }) {
  return (
    <div className="max-w-4xl mx-auto bg-gray-800 p-6 rounded shadow text-white">

      {/* Title */}
      <h1 className="text-3xl font-bold mb-4 text-blue-400">
        {post.title}
      </h1>

      {/* Image */}
      <img
        src="https://images.unsplash.com/photo-1555066931-4365d14bab8c"
        className="w-full h-64 object-cover rounded mb-4"
      />

      {/* Content */}
      <p className="text-gray-400 leading-7 whitespace-pre-line">
        {post.content}
      </p>

      {/* Extra Image */}
      <img
        src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
        className="w-full h-64 object-cover rounded mt-6"
      />
      

    </div>
  );
}

export default PostPage;