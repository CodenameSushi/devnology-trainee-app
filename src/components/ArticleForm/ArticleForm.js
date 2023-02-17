import { useState } from "react";

export function ArticleForm({ selectedArticle, onSubmit, toggleModal}) {
  const [title, setTitle] = useState(selectedArticle?.title || "");
  const [url, setUrl] = useState(selectedArticle?.url || "");
  const [author, setAuthor] = useState(selectedArticle?.author || "");

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ title, url, author });
  };




  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col mb-2">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
      </div>
      <div className="flex flex-col mb-2">
        <label htmlFor="url">URL (Including https://)</label>
        <input
        placeholder="https://yourarticle.com"
          type="text"
          id="url"
          value={url}
          onChange={(event) => setUrl(event.target.value)}
        />
      </div>
      <div className="flex flex-col mb-2">
        <label htmlFor="author">Author</label>
        <input
          type="text"
          id="author"
          value={author}
          onChange={(event) => setAuthor(event.target.value)}
        />
      </div>
      <div className="flex justify-center">
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 m-1 rounded hover:bg-blue-700 "
        >
          {selectedArticle !== null ? "Update" : "Post"}
        </button>
        <button onClick={toggleModal} className="bg-red-500 text-white px-4 py-2 m-1 rounded hover:bg-red-700 w-fit ">Cancel</button>
      </div>
    </form>
  );
}
