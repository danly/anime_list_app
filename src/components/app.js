import React, { Component } from 'react';

import AddAnimeBar from '../containers/add_anime_bar';
import AnimeList from '../containers/anime_list'

export default class App extends Component {
  render() {
    return (
      <div>
        <AddAnimeBar />
        <AnimeList />
      </div>
    );
  }
}
