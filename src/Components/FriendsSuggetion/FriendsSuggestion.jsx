import React from 'react'
import Friend from './Friend'

export default function FriendsSuggestion() {
  return (
    <div className="view friends smaller-margin">
      <div className="upper">
        <h6>people you may know</h6>
        <div className="dots">
          <div className="dot" />
        </div>
      </div>
      <div className="owl-carousel owl-theme people">

        <Friend image="img/avatar/1.jpg" name="Rosie Pie" nbMutualFriends="4 mutual friend" />
        <Friend image="img/avatar/4.jpg" name="sarah jones" nbMutualFriends="4 mutual friend" />
        <Friend image="img/avatar/3.jpg" name="chris doe" nbMutualFriends="4 mutual friend" />
        <Friend image="img/avatar/2.jpg" name="katie adam" nbMutualFriends="4 mutual friend" />
      </div>
    </div>
  )
}
