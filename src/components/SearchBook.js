import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchBooks } from "../redux/Search/actionSearch";
import { addBook } from "../redux/Books/actionBook";

const SearchBook = () => {
    const [title, setTitle] = useState("");
    const [bookId, setBookId] = useState("");
    const search = useSelector((state) => state.search);
    const state = useSelector((state) => state.books);
    const dispatch = useDispatch();

    const handleForm = (e) => {
        e.preventDefault();
        setBookId("");
        dispatch(fetchBooks(title));
    };

    const toggling = (id) => {
        if (bookId) {
            document.getElementById(`${bookId}`).classList.remove("active");
            setBookId('');
        }
        if (bookId !== id) {
            document.getElementById(`${id}`).classList.toggle("active");
            setBookId(id);
        }
    };

    const saveBook = (book) => {
        if (!book.volumeInfo.title && !book.volumeInfo.authors) {
            return;
        }
        let authors = "";
        let isValid = true;
        if (book.volumeInfo.authors.length > 1) {
            authors = book.volumeInfo.authors.join(", ")
        } else {
            authors = book.volumeInfo.authors;
        }
            
        const newBook = {
            id: book.id,
            title: book.volumeInfo.title,
            author: authors,
            link: book.volumeInfo.previewLink,
        };

        for (let data of state.books) {
            if (book.id === data.id) {
                isValid = false;
                break;
            }
        }
        if (isValid) {
            dispatch(addBook(newBook));
        }
    };

    return (
        <div>
            <form className="search" onSubmit={handleForm}>
                <h2>Books</h2>
                <p>Indiquez le sujet du livre à rechercher sur Google API</p>
                <div className="inputs">
                    <input
                        type="text"
                        name="title"
                        id="title"
                        placeholder="Sujet"
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <button type="submit">Rechercher</button>
            </form>
            {search &&
                search.fetchedBooks.map((book) => {
                    const authors =  book.volumeInfo.authors;
                    return (
                        <div className="accordion" key={book.id}>
                            <div className="contentBox" id={book.id}>
                                <h3
                                    className="label"
                                    onClick={() => toggling(book.id)}
                                >
                                    {book.volumeInfo.title}
                                </h3>
                                <div className="content">
                                    {book.volumeInfo.hasOwnProperty(
                                        "imageLinks"
                                    ) && (
                                        <img
                                            src={
                                                book.volumeInfo.imageLinks
                                                    .thumbnail
                                            }
                                            alt={book.volumeInfo.title}
                                        />
                                    )}
                                    <p>
                                        Auteur : {authors && authors.join(', ')}
                                    </p>
                                    <br />
                                    <p>
                                        {book.volumeInfo.description
                                            ? book.volumeInfo.description
                                            : "Aucune Description."}
                                    </p>
                                    <br />
                                    <button onClick={() => saveBook(book)}>
                                        Enregister
                                    </button>
                                    <a
                                        href={book.volumeInfo.previewLink}
                                        className="preview"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        Voir plus
                                    </a>
                                </div>
                            </div>
                        </div>
                    );
                })}
        </div>
    );
};

export default SearchBook;
