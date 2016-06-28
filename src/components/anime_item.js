import React from 'react';

import AnimeDetail from './anime_detail';
import AnimeItemButtons from './anime_item_buttons';

import { LIST_TYPE } from '../containers/anime_list';
import { SEARCH_TYPE } from '../containers/searched_anime';

export default (props) => {
  const {data, type} = props;

  return (
    <div id={data._id}
      data-hum-id={data.hum_id}
      className='anime-item'>

      <img src={data.cover_image} />

      <div className='overlay'>
        <AnimeDetail title={data.title} synopsis={data.synopsis} />
        <AnimeItemButtons />
      </div>
    </div>
  );
}
