import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchAnimeList } from '../actions/index';

import AnimeItem from '../components/anime_item'

export const LIST_TYPE = "LIST_TYPE";

class AnimeList extends Component {
  componentWillMount() {
    this.props.fetchAnimeList();
  }

  renderList() {
    return this.props.animes.map((anime) => {
      return(
        <div key={anime._id}>
          <AnimeItem data={anime} type={LIST_TYPE} />
        </div>
      );
    });
  }

  render() {
    return (
      <div className='anime-list-container'>
        {this.renderList()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { animes: state.animes.all };
}

export default connect(mapStateToProps, { fetchAnimeList })(AnimeList);
