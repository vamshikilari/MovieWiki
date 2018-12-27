import {SEARCH_MOVIES, SET_CURRENT_MOVIE, SET_SEARCH} from "../actions/search";



const initState = {
    movies: [],
    currentMovie: {},
    searchHistory: []
};

const moviesReducer = (state = initState, action) => {
    switch(action.type){
        case SEARCH_MOVIES:
        return { ...state, movies: action.payload };
        case SET_CURRENT_MOVIE:
        return { ...state, currentMovie: action.payload };
        case SET_SEARCH:
        return { ...state, searchHistory: action.payload };
        default:
        return state;
    };
}
export default moviesReducer
