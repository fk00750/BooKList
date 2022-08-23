import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BookListContextProvider } from "./context/BooklistContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BookListContextProvider>
      <App />
    </BookListContextProvider>
  </React.StrictMode>
);
