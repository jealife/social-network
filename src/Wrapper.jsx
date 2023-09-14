import React from 'react'
import Feed from './Components/Feed/Feed'
import LeftSideBar from './Components/Sidebar/LeftSideBar'
import RightSideBar from './Components/Sidebar/RightSideBar'

export default function Wrapper() {
  return (
    <div className="wrapper">
        <LeftSideBar/>
        <Feed/>
        <RightSideBar/>
    </div>
  )
}
