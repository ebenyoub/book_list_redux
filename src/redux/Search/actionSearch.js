import {
    FETCH_BOOKS_LOADING,
    FETCH_BOOKS_SUCCESS,
    FETCH_BOOKS_ERROR,
} from "./type";
import axios from "axios";

const GOOGLE_API_KEY = "AIzaSyA2-QY4dKjxeHRnzbmVoZQKyKKyTi2akio";

const fetchBooksLoading = () => {
    console.log("Loading...");
    return {
        type: FETCH_BOOKS_LOADING,
    };
};

const fetchBooksSuccess = (data) => {
    return {
        type: FETCH_BOOKS_SUCCESS,
        payload: data,
    };
};

const fetchBooksError = (error) => {
    return {
        type: FETCH_BOOKS_ERROR,
        payload: error,
    };
};

export const fetchBooks = (title) => {
    const url = `https://www.googleapis.com/books/v1/volumes?q=${title}&key=${GOOGLE_API_KEY}&maxResults=20`;
    return (dispatch) => {
        dispatch(fetchBooksLoading());
        
        axios
        .get(url)
        .then((res) => {
            dispatch(fetchBooksSuccess(res.data.items))
        })
        .catch((err) => {
            dispatch(fetchBooksError(err))
        });
    };
};

