import { Children, createContext, useReducer } from "react";

export const BookListContext = createContext();

export const BookListReducer = (state, action) => {
  switch (action.type) {
    case "SET_BOOKS":
      return {
        books: action.payload,
      };
    case "CREATE_BOOK":
      return {
        books: [action.payload,...state.books],
      };
    default:
      return state;
  }
};

export const BookListContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(BookListReducer, {
    books: null,
  });

  return (
    <BookListContext.Provider value={{...state, dispatch}}>
      {children}
    </BookListContext.Provider>
  );
};
