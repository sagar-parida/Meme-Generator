import React from 'react'
import image from "./images/troll-face.png"

export default function Header() {
    return(
        <div className="header">
            <img className="logo" src={image} />
            <h1 className="title">Meme Generator</h1>
            <p className="project-description">My Second React Project</p>
        </div>
    )
}