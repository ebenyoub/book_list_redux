import "./App.css";
import Header from "./components/Header";
import AddBook from "./components/AddBook";
import SearchBook from "./components/SearchBook";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                    <Header />
                    <Routes>
                        <Route path="/" element={<AddBook />} />
                        <Route path="search" element={<SearchBook />} />
                    </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
