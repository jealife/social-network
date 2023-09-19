import React from 'react'
import Story from './Story'

export default function Stries() {
  return (
    <div className="stories">
      <div className="owl-controls">
        <div className="owl-nav">
          <div className="controllers nxtBtn">
            <img src="img/icons/arrow-right.svg" alt="" />
          </div>
        </div>
      </div>
      <div className="owl-carousel owl-theme slider">
        <div className="item">
          <div className="overlay first">
            <div className="create">
              <div className="icon">
                <img src="img/icons/plus.svg" alt="" />
              </div>
              <span>Create a Story</span>
            </div>
          </div>
          <div className="story-image">
            <img src="img/avatar/hero.png" alt="" />
          </div>
        </div>

        <Story avatar=" img/avatar/2.jpg" st="img/avatar/st-2" name="samantha john" />
        <Story avatar=" img/avatar/3.jpg" st="img/avatar/st-3" name="Omar yassir" />
        <Story avatar=" img/avatar/4.jpg" st="img/avatar/st-4" name="amanda cerny" />
        <Story avatar=" img/avatar/5.jpg" st="img/avatar/st-5" name="stacy lopez" />
        <Story avatar=" img/avatar/6.jpg" st="img/avatar/st-1" name="joshua simon" />

      </div>
    </div>
  )
}
