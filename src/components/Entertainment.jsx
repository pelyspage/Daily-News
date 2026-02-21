import React from 'react'
import '../CSS/Entertainment.css'
import Feeds from '../UI/Feeds'
import { motion } from 'framer-motion'

function Entertainment() {
  return (
    <motion.div 
      className="Entertainment"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className='feed-list'>
          <Feeds category='entertainment'/>
      </div>
    </motion.div>
  )
}

export default Entertainment