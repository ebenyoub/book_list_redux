import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBook } from "../redux/Books/actionBook";
import ListBook from "./ListBook";

const AddBook = () => {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const books = useSelector((state) => state.books.books);
    const dispatch = useDispatch();

    const handleForm = (e) => {
        e.preventDefault();
        if (!title && !author) {
            return;
        }
        let isValid = true;
        const newBook = {
            id: new Date().getTime(),
            title: title,
            author: author,
        };
        for (let book of books) {
            if (title === book.title && author === book.author) {
                isValid = false;
            }
        }
        if (isValid) {
            dispatch(addBook(newBook));
        }

    };

    return (
        <div>
            <form className="addForm" onSubmit={handleForm}>
                <h2>Books</h2>
                <p>Ajouter un livre à votre bibliothèque</p>
                <div className="inputs">
                    <input
                        type="text"
                        name="title"
                        id="title"
                        placeholder="Title"
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <input
                        type="text"
                        name="author"
                        id="author"
                        placeholder="Author"
                        onChange={(e) => setAuthor(e.target.value)}
                    />
                </div>
                <button type="submit">Ajouter un livre</button>
            </form>
            <ListBook />
        </div>
    );
};

export default AddBook;
