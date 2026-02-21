import React from 'react'
import '../CSS/Sport.css'
import Feeds from '../UI/Feeds'

function Sport() {
  return (
    <div className="Sport">
      <div className='feed-list'>
          <Feeds category='sport'/>
      </div>
    </div>
  )
}

export default Sport