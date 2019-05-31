import React from 'react';
import './Detail.css';


const Detail = (props) => {
  return (
    <div className="detail">
      <span>{props.name}:</span>
      <span>{props.value}</span>
    </div>
  )
}

export default Detail;
