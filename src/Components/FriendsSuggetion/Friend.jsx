import React from 'react'

export default function Friend( {image, name, nbMutualFriends}) {
  return (
    <div className="item">
      <div className="person-img">
        <div className="icon">×</div>
        <img src={image} alt="" />
      </div>
      <div className="info">
        <h4>{name} </h4>
        <span>{nbMutualFriends}</span>
        <button>add friend</button>
      </div>
    </div>
  )
}
