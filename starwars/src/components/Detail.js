import React from 'react';


const Detail = (props) => {
  return (
    <div className="detail">
      {props.name}: {props.value}
    </div>
  )
}

export default Detail;
