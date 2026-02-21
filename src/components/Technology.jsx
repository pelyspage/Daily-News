import React from 'react'
import Feeds from '../UI/Feeds'
import '../CSS/Technology.css'
import { motion } from 'framer-motion'

function Technology() {
  return (
    <motion.div 
      className="Technology"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
        <div className='feed-list'>
          <Feeds category='technology'/>
      </div>
    </motion.div>
  )
}

export default Technology