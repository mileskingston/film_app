import axios from 'axios';

const ROOT_URL = 'https://api.themoviedb.org/3/movie/',
  API_KEY = '?api_key=65a08ce009e24e9aa54e97af25a56861';

export function fetchFilm(id) {
  const getDetailsUrl = `${ROOT_URL}${id}${API_KEY}`;
  const request = axios.get(getDetailsUrl);

  return (dispatch) => {
    return request
      .then(
        success => dispatch(fetchFilmSuccess(success)),
        error => dispatch(fetchFilmError(error))
      );
  };
}

export function fetchFilmIds(id) {
  const getFilmIdsUrl = `${ROOT_URL}${id}/external_ids${API_KEY}`;
  const request = axios.get(getFilmIdsUrl);
  
  return (dispatch) => {
    return request
      .then(
        success => dispatch(fetchFilmIdSuccess(success)),
        error => dispatch(fetchFilmError(error))
      );
  };
}

export function fetchFilmCredits(id) {
  const getFilmCreditsUrl = `${ROOT_URL}${id}/credits${API_KEY}`;
  const request = axios.get(getFilmCreditsUrl);
  
  return (dispatch) => {
    return request
      .then(
        success => dispatch(fetchFilmCreditsSuccess(success)),
        error => dispatch(fetchFilmError(error))
      );
  };
}

export function fetchFilmIdSuccess(response) {
  return {
    type: 'FETCH_ID_SUCCESS',
    data: response.data
  };
}

export function fetchFilmCreditsSuccess(response) {
  return {
    type: 'FETCH_CREDITS_SUCCESS',
    data: response.data
  };
}

export function fetchFilmSuccess(response) {
  return {
    type: 'FETCH_SUCCESS',
    data: response.data
  };
}

export function fetchFilmError(response) {
  return {
    type: 'FETCH_ERROR',
    filmDetail: response.data
  };
}

export function addFilmSearch(searchVal) {
  return {
    type: 'ADD_FILM_SEARCH',
    searchVal: searchVal
  };
}