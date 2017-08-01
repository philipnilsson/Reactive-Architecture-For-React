import { combineReducers } from 'redux';
import EVENTS from './events';

function searchString(search = '', payload) {
    if (payload.type === EVENTS.SET_SEARCH_STRING) {
        return payload.searchString;
    }
    if (payload.type === EVENTS.SELECT_MOVIE) {
        return '';
    }
    return search;
}

function currentMovie(movie = null, payload) {
    if (payload.type === EVENTS.SELECT_MOVIE) {
        return payload.movie;
    }
    return movie;
}

export default combineReducers({
    searchString, currentMovie
});
