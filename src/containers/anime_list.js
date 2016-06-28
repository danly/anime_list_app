import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchAnimeList } from '../actions/index';

class AnimeList extends Component {
  componentWillMount() {
    this.props.fetchAnimeList();
  }

  renderList() {
    return this.props.animes.map((anime) => {
      return(
        <div
          key={anime._id}>
          {anime.title}
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        {this.renderList()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { animes: state.animes.all };
}

export default connect(mapStateToProps, { fetchAnimeList })(AnimeList);
