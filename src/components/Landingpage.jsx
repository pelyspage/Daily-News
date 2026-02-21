import React from 'react'
import '../CSS/Landingpage.css'
import NewsIcon from '../assets/newsicon.png'

function Landingpage() {
  return (
    <div className="Landingpage">
      <div className='page-text'>
        <h1><span>Welcome to</span> Daily News</h1>
        <p>Get the latest news from around the world</p>
        <span>
          Our app delivers the most relevant headlines instantly, keeping you updated with breaking stories and personalized insights.
        </span>
      </div>
      <div className='news-icon'>
        <img src={NewsIcon} alt="News Icon" />
      </div>
    </div>
  )
}

export default Landingpage