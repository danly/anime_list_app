#Anime List App

## Setup
### Required
- MongoDB
- `anime_list_backend` app running on `localhost:3001`
  - https://github.com/danlyg/anime_list_backend

### Initialize
1. Make sure `localhost:3001` is running with `anime_list_backend`
2. `npm install`
3. `npm start`

## Tech
- React
- Redux

## API
### Anime Backend
- https://market.mashape.com/vikhyat/hummingbird-v1
- https://hummingbirdv1.p.mashape.com/anime/{id}
  - id: **[Number/Title]**
    - **NOTE** Title needs to be slug
  - EX: http://hummingbird.me/api/v1/anime/bleach
  - DOCs: https://github.com/hummingbird-me/hummingbird
### List backend
- http://localhost:3001
  - `/anime-list` get all anime from the list
  - `/anime-list/new` create a new anime item
  - `/anime-list/:id`
    - GET a specific item using `_id`
    - PUT update a specific item using `_id`
    - DELETE a specific item

## Road Bumps
### Webpack
- Setting up webpack dev server port and linking with express http server
### ES6
- Spread operator `...`
  - It is experimental so it requires `stage-2` babel preset to use
### Data Concerns
- DB should store just basic info of anime
- Status, episodes other changing information should be newly requested
  - Few ways to do this:
    - Have the backend do a GET for the information from hummingbird
      - **Pro:** Backend deals with all the information requests
      - **Pro:** Backend API responds with all the data at once!
      - **Con:** Spend time on working on backend when need to learn react/redux
    - Have the frontend do the GET for the information from hummingbird **Doing this**
      - **Pro:** Get to work more with react/redux
      - **Pro:** Hook up multiple APIs to redux
      - **Con:** Multiple API domains to manage..
      - **Con:** May have to do more than one GET for each request (**complexity**)
### Other
- How Redux/React should handle a 500 error from an external API
- Title needs to be of slug type for the anime API
- Had to send `x-www-form-urlencoded` data for saving a new anime
  - Use `qs` module and `qs.stringify`
- Constants `SEARCH_TYPE` and `LIST_TYPE` are in two different files could consolidate into one
### Questions
- Is it legal to hide elements of a reusable component with CSS???
