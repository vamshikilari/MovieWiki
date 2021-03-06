import api from '../../api'

export const SEARCH_MOVIES = "SEARCH_MOVIES";
export const SET_CURRENT_MOVIE = "SET_CURRENT_MOVIE";
export const SET_SEARCH = "SET_SEARCH";

function setMovies(payload) {
    return { type: SEARCH_MOVIES, payload: payload };
  }

function setCurrentMovie(payload) {
    return { type: SET_CURRENT_MOVIE, payload: payload};
}

function setSearch(payload){
    return {type: SET_SEARCH, payload:payload};
}

export function topRatedMovies(){
  const KEY = "63cc14d5ec25b2ab5e764e614d134fc6";
  return function(dispatch){
  fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${KEY}&language=en-US&page=1`, {
      method: 'GET',
      headers: []
  })
  .then(response => response.json())
  .then(response => {
      dispatch(setMovies(response.results));
      console.log(response);
  });
}
}

const searchTerms = [];

export function search(term="") {
  searchTerms.push(term);
    const KEY = "63cc14d5ec25b2ab5e764e614d134fc6";
    return function(dispatch) {
        fetch(`${api.baseUrl}?api_key=${KEY}&query=${term}`, {
            method: 'GET',
            headers: []
        })
        .then(response => response.json())
        .then(response => {
            dispatch(setMovies(response.results));
            dispatch(setSearch(searchTerms));
            console.log(response);
        });
    };
  }


export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch(err) {
    //ignore err
  }
};

export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) {
      return undefined;
    }else{
        return JSON.parse(serializedState);
    }
  } catch (err) {
    return undefined;
  }
};

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
