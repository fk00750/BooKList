import { useEffect } from "react";
import { Link } from "react-router-dom";
import BooksDetail from "../Components/BooksDetail";
import { useBookListContext } from "../Hooks/useBookListContext";

function Home() {
  const {books , dispatch} = useBookListContext()

  useEffect(() => {
    const fetchBooksData = async function () {
      const response = await fetch("http://localhost:3000/api/v1/booklist");
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
        <button>Add New Book</button>
      </Link>
      <div className="books">
        {books &&
          books.map((book, index) => (
            <BooksDetail book={book} key={book._id} index={index} />
          ))}
      </div>
    </div>
  );
}

export default Home;