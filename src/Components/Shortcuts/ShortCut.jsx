import React from 'react'

export default function ShortCut({image, title}) {
    return (
        <div className="menu-item">
            <div className="item-row">
                <div className="icon">
                    <img src={image} alt="" />
                </div>
                <h4>{title} </h4>
            </div>
        </div>
    )
}
