import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";
import BookForm from "./Components/BookForm";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/form" element={<BookForm />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
