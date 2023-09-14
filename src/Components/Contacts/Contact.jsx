import React from 'react'

export default function Contact({avatar, name}) {
    return (
        <div className="user">
            <div className="profile">
                <img src={avatar} alt="" />
            </div>
            <h4>{name}</h4>
        </div>
    )
}
