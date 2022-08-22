import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BooksDetail from "../Components/BooksDetail";

function Home() {
  const [books, setBooks] = useState(null);

  useEffect(() => {
    const fetchBooksData = async function () {
      const booksInfo = [
        {
          id: 5,
          title: "Winter in April",
          author: "author fifth",
          summary: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
        {
          id: 4,
          title: "The last Night",
          author: "author fourth",
          summary: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
        {
          id: 3,
          title: "Still Alive",
          author: "author third",
          summary: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
        {
          id: 2,
          title: "Blood Money",
          author: "author second",
          summary: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
        {
          id: 1,
          title: "Born to kill",
          author: "author first",
          summary: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
      ];
      setBooks(booksInfo);
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
            <BooksDetail book={book} key={book.id} index={index} />
          ))}
      </div>
    </div>
  );
}

export default Home;
