import React, { useState } from "react";
import { useBookListContext } from "../Hooks/useBookListContext";

function BookForm(props) {
  console.log(props);
  const { dispatch } = useBookListContext();

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [summary, setSummary] = useState("");
  const [Error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const books = { title, author, summary };
    console.log(books);

    const response = await fetch("http://localhost:3000/api/v1/booklist", {
      method: "POST",
      body: JSON.stringify(books),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
    }

    if (response.ok) {
      setTitle("");
      setAuthor("");
      setSummary("");
      setError(null);
      console.log("New workout is Added ", json);
      dispatch({ type: "CREATE_BOOK", payload: json });
    }
  };

  return (
    <div>
      <form className="m-4" onSubmit={handleSubmit}>
        <div className="mb-6">
          <label
            htmlFor="title"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Enter Book Title
          </label>
          <input
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            id="title"
            className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Enter the Title of Book"
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="author"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Enter Book Author
          </label>
          <input
            type="text"
            id="author"
            onChange={(e) => setAuthor(e.target.value)}
            value={author}
            className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Enter the Name of Book Author"
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="summary"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Enter Book Summary
          </label>
          <textarea
            id="summary"
            cols="15"
            rows="5"
            onChange={(e) => setSummary(e.target.value)}
            value={summary}
            className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Write down the Summary of Book..."
          ></textarea>
        </div>
        <button
          type="sumbit"
          className="text-white bg-blue-700 font-medium rounded-lg text-sm px-5 py-2 text-center hover:bg-blue-800"
        >
          Add
        </button>
        {Error && <div className="error">{Error}</div>}
      </form>
    </div>
  );
}

export default BookForm;
