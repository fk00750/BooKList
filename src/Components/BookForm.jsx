import React from "react";

function BookForm() {
  return (
    <div>
      <form className="m-4">
        <div className="mb-6">
          <label
            htmlFor="title"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Enter Book Title
          </label>
          <input
            type="text"
            id="title"
            className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Enter the Title of Book"
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="title"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Enter Book Author
          </label>
          <input
            type="text"
            id="title"
            className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Enter the Name of Book Author"
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="title"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Enter Book Summary
          </label>
          <textarea
            id="summary"
            cols="15"
            rows="5"
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
      </form>
    </div>
  );
}

export default BookForm;
