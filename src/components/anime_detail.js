import React from 'react';

export default (props) => {
  const {title, synopsis} = props,
    trimSynopsis = synopsis.substring(0,135);

  return (
    <div>
        <h2>{title}</h2>
        <p>
          {trimSynopsis}
          <a href="">... more</a>
        </p>
    </div>
  );
}
