import { combineReducers } from 'redux';
import moviesReducer from './search';


const rootReducer = combineReducers({
    movieList: moviesReducer
});


export default rootReducer;
