import React from 'react'

export default function Story({avatar, st, name}) {
  return (
    <div className="item">
      <div className="overlay">
        <div className="person">
          <div className="profile">
            <img src={avatar} alt="" />
          </div>
        </div>
        <h4> {name}</h4>
      </div>
      <div className="story-image">
        <img src={st} alt="" />
      </div>
    </div>
  )
}
