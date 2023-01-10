import { createStore, applyMiddleware, combineReducers } from 'redux';
import reducerBook from './Books/reducerBook';
import reducerSearch from './Search/reducerSearch';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducers = combineReducers({
    books: reducerBook,
    search: reducerSearch
})

const store = createStore(rootReducers, composeWithDevTools(applyMiddleware(thunk)));

export default store;
