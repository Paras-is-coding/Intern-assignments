import React from 'react'
import './About.css'
import { FaRegBookmark } from "react-icons/fa";

export default function About() {
  return (
    <div id='aboutUs'>
    <div id="left">
      <div className="content">
        <div className='smallHeading'>WHO WE ARE</div>
        <div className='largerHeading'>Knowledge will bring you the opportunity to make a difference.</div>
        <div className='para'>Vivamus nulla montes vehicula ex semper mus finibus quis eleifend facilisi. Turpis consectetur pulvinar auctor vestibulum quisque. Velit quisque ante interdum consectetuer habitant blandit.</div>
        <button>DISCOVER MORE</button>
      </div>
    </div>
    <div id="right">
      <div className="colorBox">
      </div>
      <div className="imageContainer">
        {/* <img src="" alt="image" /> */}
      </div>
      <div className="historyCard">
        <div className="iconContainer">
        <FaRegBookmark />
        </div>
        <div className="historyHeading">
        40+ Years of History
        </div>
        <div className="historyContent">
        Netus amet congue justo luctus auctor erat dapibus nam sodales ridiculus duis
        </div>
      </div>
    </div>
    </div>
  )
}
