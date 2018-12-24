import api from '../../api'

export const SEARCH_MOVIES = "SEARCH_MOVIES";
export const SET_CURRENT_MOVIE = "SET_CURRENT_MOVIE";

function setMovies(payload) {
    return { type: SEARCH_MOVIES, payload: payload };
  }

function setCurrentMovie(payload) {
    return { type: SET_CURRENT_MOVIE, payload: payload};
}

export function search(term="") {
    const KEY = "63cc14d5ec25b2ab5e764e614d134fc6";
     localStorage.setItem('term', term);
    return function(dispatch) {
        fetch(`${api.baseUrl}?api_key=${KEY}&query=${term}`, {
            method: 'GET',
            headers: []
        })
        .then(response => response.json())
        .then(response => {
            dispatch(setMovies(response.results));
            console.log(response);
        });
    };
}

export function currentMovie(movieId) {
    const KEY = "63cc14d5ec25b2ab5e764e614d134fc6";
    const url = "https://api.themoviedb.org/3/movie/";
    return function(dispatch) {
        fetch(`${url}${movieId}?api_key=${KEY}`,{
        method: 'GET',
        headers: []
        })
        .then(response => response.json())
        .then(response => {
            dispatch(setCurrentMovie(response));
            console.log(response);
        });
    };
}
