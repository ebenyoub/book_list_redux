import { ADD_BOOK, DELETE_BOOK, CLEAR_BOOK } from "./type";

export const addBook = book => {
    return {
        type: ADD_BOOK,
        payload: book
    }
}

export const deleteBook = id => {
    return {
        type: DELETE_BOOK,
        payload: id
    }
}

export const clearBook = () => {
    return {
        type: CLEAR_BOOK
    }
}