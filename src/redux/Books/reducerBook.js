import { ADD_BOOK, CLEAR_BOOK, DELETE_BOOK } from './type';

const initialStateBook = {
    books: []
}

const ReducerBook = (state = initialStateBook, action) => {
    switch (action.type) {
        case ADD_BOOK:
            return {
                ...state,
                books: [...state.books, action.payload]
            }
        
        case DELETE_BOOK:
            return {
                ...state,
                books: state.books.filter(book => book.id !== action.payload)
            }
    
        case CLEAR_BOOK:
            return {
                ...state,
                books: []
            }

        default: return state
    }
}

export default ReducerBook;
