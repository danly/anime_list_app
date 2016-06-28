import { GET_NEW_ANIME, FETCH_ANIME_LIST } from '../actions/index';

const INITIAL_STATE = {
  all: [],
  anime: null,
};

export default function(state=INITIAL_STATE, action) {
  switch(action.type) {
  case FETCH_ANIME_LIST:
    return { ...state, all: action.payload.data };
  case GET_NEW_ANIME:
    if(!action.payload.data) {
      return state;
    }
    return { ...state, anime: action.payload.data };
  default:
    return state;
  }
}
