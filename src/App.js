import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AddBook from "./components/AddBook";
import SearchBook from "./components/SearchBook";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <BrowserRouter basename={process.env.PUBLIC_URL}>
                <Header />
                <main className="main">
                    <Routes>
                        <Route path="/" element={<AddBook />} />
                        <Route path="search" element={<SearchBook />} />
                    </Routes>
                </main>
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;
