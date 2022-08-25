import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useBookListContext } from "../Hooks/useBookListContext";
import BookForm from "./BookForm";

function BooksDetail({ book, index }) {
  const { dispatch } = useBookListContext();

  // const Edit_handleClick =  () => {
  //   console.log('e')
  //   return <BookForm data={book.title}></BookForm>
  // };

  const Delete_handleClick = async () => {
    const response = await fetch(
      "http://localhost:3000/api/v1/booklist/" + book._id,
      {
        method: "DELETE",
      }
    );

    const json = await response.json();

    if (response.ok) {
      dispatch({ type: "DELETE_BOOK", payload: json.book });
    }
  };

  return (
    <div className="book-details my-10">
      <dl className="books__list m-2">
        <div className="book__container p-5 border border-blue-600 m-2 rounded-md bg-blue-300">
          <b className="indexOfBooks bg-black text-white rounded-full w-5 h-5 flex items-center justify-center">
            {index + 1}
          </b>
          <div className="mt-3">
            <div className="">
              <dt className="text-sm font-mono text-gray-700">Book Title</dt>
              <dd className="text-xl bg-gray-300 text-center rounded-md m-2 p-1">
                {book.title}
              </dd>
            </div>
            <div>
              <dt className="text-sm font-mono text-gray-700">Book Author</dt>
              <dd className="text-xl bg-gray-300 text-center rounded-md m-2 p-1">
                {book.author}
              </dd>
            </div>
            <div>
              <dt className="text-sm font-mono text-gray-700">Book Summary</dt>
              <dd className="text-base bg-gray-300 text-center rounded-md m-2 p-2 mb-4">
                {book.summary}
              </dd>
            </div>
            <div className="edit_dlt--btn space-x-2">
              <Link to="/editform" state={{book : book}}>
                <button
                  className="bg-green-600 h-7 w-10 rounded-lg"
                >
                  Edit
                </button>
              </Link>
              <button
                onClick={Delete_handleClick}
                className="bg-red-600 h-7 w-16 rounded-lg"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </dl>
    </div>
  );
}

export default BooksDetail;
