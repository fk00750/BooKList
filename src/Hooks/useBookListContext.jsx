import { BookListContext } from "../context/BooklistContext";
import { useContext } from "react";

export const useBookListContext = () => {
  const context = useContext(BookListContext);

  if (!context) {
    throw Error("useBookListContext must be inside an BookListContextProvider");
  }

  return context;
};
