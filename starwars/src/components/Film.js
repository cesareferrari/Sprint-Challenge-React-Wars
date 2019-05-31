import React from 'react';
import './Film.css';

const Film = props => {
  return(
    <div className="film">
      {props.filmTitle}
    </div>
  )
}

export default Film;
