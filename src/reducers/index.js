import { combineReducers } from 'redux';
import AnimeReducer from './reducer_anime';

const rootReducer = combineReducers({
  animes: AnimeReducer
});

export default rootReducer;
