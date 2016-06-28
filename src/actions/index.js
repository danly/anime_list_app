import axios from 'axios';
import qs from 'qs';

export const FETCH_ANIME_LIST = 'FETCH_ANIME_LIST';
export const GET_NEW_ANIME = 'GET_NEW_ANIME';
export const ADD_NEW_ANIME = 'ADD_NEW_ANIME';
export const INPUT_CLEARED = 'INPUT_CLEARED';
// export const GET_ANIME = 'GET_ANIME';
export const DELETE_ANIME = 'DELETE_ANIME';

const ANIME_ROOT_URL = 'https://hummingbirdv1.p.mashape.com/anime';
const SERVICE_ROOT_URL = 'http://localhost:3001'

axios.defaults.headers.common["X-Mashape-Key"] = "yj40DtzxV7mshv8yXobiY22rVNB2p1PwQNJjsn28E135jFgogL";

export function fetchAnimeList() {
  const request = axios.get(`${SERVICE_ROOT_URL}/anime-list`);

  return {
    type: FETCH_ANIME_LIST,
    payload: request
  };
}

export function getNewAnime(title) {
  const request = axios.get(`${ANIME_ROOT_URL}/${title}`);

  return {
    type: GET_NEW_ANIME,
    payload: request
  };
}

export function addNewAnime(props) {
  const request = axios.post(`${SERVICE_ROOT_URL}/anime-list/new`, qs.stringify(props));

  return {
    type: ADD_NEW_ANIME,
    payload: request
  }
}

export function inputCleared(props) {
  return {
    type: INPUT_CLEARED
  }
}


// export function getAnime(id) {
//   const request = axios.get(`${SERVICE_ROOT_URL}/anime-list/${id}`);
//
//   return {
//     type: GET_ANIME,
//     payload: request
//   }
// }
//
export function deleteAnime(id) {
  const request = axios.delete(`${SERVICE_ROOT_URL}/anime-list/${id}`);

  return {
    type: DELETE_ANIME,
    payload: request
  }
}
