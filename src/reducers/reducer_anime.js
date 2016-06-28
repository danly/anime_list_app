import { GET_NEW_ANIME, FETCH_ANIME_LIST, ADD_NEW_ANIME, INPUT_CLEARED } from '../actions/index';

const INITIAL_STATE = {
  all: [],
  searched_anime: null,
  show_anime: null,
};

export default function(state=INITIAL_STATE, action) {
  switch(action.type) {

  case FETCH_ANIME_LIST:
    return { ...state, all: action.payload.data };

  case GET_NEW_ANIME:
    if(action.payload.status === 500) {
      return state;
    }
    if(!action.payload.data) {
      return state;
    }
    return { ...state, searched_anime: action.payload.data };

  case ADD_NEW_ANIME:
    return { ...state, all: action.payload.data };

  case INPUT_CLEARED:
    return { ...state, searched_anime: null };

  default:
    return state;
  }
}
