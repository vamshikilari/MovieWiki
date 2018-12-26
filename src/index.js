import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { Provider} from 'react-redux'
import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './store/reducers/rootReducer'
import { saveState, loadState } from './store/actions/search'
import { composeWithDevTools } from "redux-devtools-extension"
import throttle from 'lodash/throttle'

const persistentState = loadState();
const store = createStore(rootReducer, persistentState, composeWithDevTools(applyMiddleware(thunk)));

store.subscribe(throttle(() => {
  saveState(
    {searchHistory: store.getState().movieList.searchHistory},
    {movies: store.getState().movieList.movies}
  );
}, 1000));


ReactDOM.render(<Provider store= {store}><App /></Provider>, document.getElementById('root'));
