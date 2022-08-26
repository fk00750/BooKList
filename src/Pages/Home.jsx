import { useEffect } from "react";
import { Link } from "react-router-dom";
import BooksDetail from "../Components/BooksDetail";
import { useBookListContext } from "../Hooks/useBookListContext";

function Home() {
  const {books , dispatch} = useBookListContext()

  useEffect(() => {
    const fetchBooksData = async function () {
      const response = await fetch("https://booklist00.herokuapp.com/api/v1/booklist");
      const json = await response.json();

      if (response.ok) {
        dispatch({type:"SET_BOOKS", payload:json.AllBooks})
      }
    };

    fetchBooksData();
  }, []);

  return (
    <div>
      <Link to="/form">
        <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-2 border-b-2 border-blue-700 hover:border-blue-500 rounded m-2">Add New Book</button>
      </Link>
      <div className="books flex flex-wrap">
        {books &&
          books.map((book, index) => (
            <BooksDetail book={book} key={book._id} index={index} />
          ))}
      </div>
    </div>
  );
}

export default Home;