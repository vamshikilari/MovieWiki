import {SEARCH_MOVIES} from "../actions/search";
import { SET_CURRENT_MOVIE } from "../actions/search";


const initState = {
    movies: [],
    currentMovie: {}
};

const moviesReducer = (state = initState, action) => {
    switch(action.type){
        case SEARCH_MOVIES:
        return { ...state, movies: action.payload };
        case SET_CURRENT_MOVIE:
        return { ...state, currentMovie: action.payload };
        default:
        return state;
    };
}
export default moviesReducer
