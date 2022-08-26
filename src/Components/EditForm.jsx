import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useBookListContext } from "../Hooks/useBookListContext";

function EditForm() {
  const location = useLocation();
  const navigate = useNavigate();
  const {
    _id,
    title:newTitle,
    author:newAuthor,
    summary:newSummary,
  } = location.state.book;


  const { dispatch } = useBookListContext();

  const [title, setNewTitle] = useState(newTitle);
  const [author, setNewAuthor] = useState(newAuthor);
  const [summary, setNewSummary] = useState(newSummary);
  const [Error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const books = { title, author, summary };

    const response = await fetch("https://booklist00.herokuapp.com/api/v1/booklist/" + _id, {
      method: "PATCH",
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
      setNewTitle("");
      setNewAuthor("");
      setNewSummary("");
      setError(null);
      console.log("Book is Updated ", json);
      navigate('/')
    //   dispatch({ type: "CREATE_BOOK", payload: json });
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
            onChange={(e) => setNewTitle(e.target.value)}
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
            onChange={(e) => setNewAuthor(e.target.value)}
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
            onChange={(e) => setNewSummary(e.target.value)}
            value={summary}
            className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Write down the Summary of Book..."
          ></textarea>
        </div>
        <button
          type="sumbit"
          className="text-white bg-blue-700 font-medium rounded-lg text-sm px-5 py-2 text-center hover:bg-blue-800"
        >
          Update
        </button>
        {Error && <div className="error">{Error}</div>}
      </form>
    </div>
  );
}

export default EditForm;
