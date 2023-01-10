import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { deleteBook, clearBook } from "../redux/Books/actionBook";

const ListBook = () => {
    const state = useSelector((state) => state.books);
    const dispatch = useDispatch();
    return (
        <div className="listBook">
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Author</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {state.books.map((book, index) => {
                        return (
                            <tr key={index}>
                                <td><a href={book.link} target="_blank" rel="noreferrer">{book.title}</a></td>
                                <td>{book.author}</td>
                                <td>
                                    <FontAwesomeIcon
                                        icon={faTrash}
                                        onClick={() =>
                                            dispatch(deleteBook(book.id))
                                        }
                                    />
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            <button onClick={() => dispatch(clearBook())}>
                Effacer tous les livres
            </button>
        </div>
    );
};

export default ListBook;
