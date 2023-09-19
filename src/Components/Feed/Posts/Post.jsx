import React from 'react'

export default function Post({ name, time, desc, postImg,avatar }) {
  return (
    <div className="view view-post-container smaller-margin">
      <div className="view-post">
        <div className="upper">
          <div className="d-flex">
            <div className="user">

              <div className="profile">
                <img src={avatar} alt="" />
              </div>

            </div>
            <div className="info">

              <h6 className="name">{name}</h6>

              <span className="time">{time}</span>

            </div>
          </div>
          <div className="dots">
            <div className="dot" />
          </div>
        </div>

        <div className="desc">
          <p>{desc}</p>
        </div>

        <div className="post-img">
          <img src={postImg} alt="" />
        </div>

        <div className="actions-container">
          <div className="action">
            <div className="icon">
              <img src="img/icons/thumbs-up.svg" alt="" />
            </div>
            <span>like</span>
          </div>
          <div className="action">
            <div className="icon">
              <img src="img/icons/comment.svg" alt="" />
            </div>
            <span>comment</span>
          </div>
          <div className="action">
            <div className="icon">
              <img src="img/icons/share.svg" alt="" />
            </div>
            <span>share</span>
          </div>
        </div>
        <div className="write-comment">
          <div className="user">
            <div className="profile">
              <img src="img/avatar/hero.png" alt="" />
            </div>
          </div>
          <div className="input">
            <input type="text" placeholder="Write a comment" name="" id="" />
            <div className="media">
              <div className="icon">
                <img src="img/icons/camera.svg" alt="" />
              </div>
              <div className="icon">
                <img src="img/icons/image.svg" alt="" />
              </div>
              <div className="icon">
                <img src="img/icons/smile-2.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
