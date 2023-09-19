import React from 'react'
import Rooms from './Rooms/Rooms'
import CreatePost from './CreatePost/CreatePost'
import Posts from './Posts/Posts'
import FriendsSuggestion from '../FriendsSuggetion/FriendsSuggestion'
import Stories from './Stories/Stories'

export default function Feed() {
  return (
    <div className="posts">
      

      <Stories/>
      
      <div className="timeline">


        <CreatePost />


        <Rooms/>


        <Posts />



        <FriendsSuggestion/>


      </div>
    </div>

  )
}
