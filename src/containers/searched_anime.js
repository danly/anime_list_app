import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addNewAnime } from '../actions/index';

import AnimeItem from '../components/anime_item'

export const SEARCH_TYPE = "SEARCH_TYPE";

class SearchedAnime extends Component {
  constructor(props) {
    super(props);

    this.addAnimeToList = this.addAnimeToList.bind(this);
  }

  addAnimeToList() {
    // store the title, hum_id to my service
    const {searched_anime} = this.props,
      dataToStore = {};
    dataToStore.title = searched_anime.title;
    dataToStore.hum_id = searched_anime.id;
    dataToStore.status = searched_anime.status;
    dataToStore.episode_length = searched_anime.episode_length;
    dataToStore.cover_image = searched_anime.cover_image;
    dataToStore.synopsis = searched_anime.synopsis;

    this.props.addNewAnime(dataToStore);
  }

  render() {
    const {searched_anime} = this.props;
    if(!searched_anime) {
      return(
        <div>Nothing searched...</div>
      );
    }
    // render the same dumb component the list also renders!
    return (
      <div className="searched-anime-container">
        <AnimeItem data={searched_anime} type={SEARCH_TYPE}/>
        <button
          className="add-to-list"
          onClick={ this.addAnimeToList }>
          Add To List!
        </button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { searched_anime: state.animes.searched_anime };
}

export default connect(mapStateToProps, { addNewAnime })(SearchedAnime);
