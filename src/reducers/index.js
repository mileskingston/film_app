export default function reducer(
  state, action) {

  const MAX_NUM = 5;

  switch (action.type) {
    case "ADD_FILM_SEARCH": {
      return {
        ...state,
        hasSubmitted: true,
        searchVal: action.searchVal
      }
    }
    case "FETCH_SUCCESS": {
      return {
        ...state,
        filmDetail: action.data
      }
    }
    case "FETCH_ID_SUCCESS": {
      return {
        ...state,
        filmIds: action.data
      }
    }
    case "FETCH_CREDITS_SUCCESS": {
      return {
        ...state,
        filmCast: action.data.cast.splice(0, MAX_NUM),
        filmCrew: action.data.crew.splice(0, MAX_NUM)
      }
    }
    case "FETCH_ERROR": {
      return {
        ...state,
        error: action.data
      }
    }
    default: {
      return {...state};
    }
  }
}