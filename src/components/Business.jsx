import React from 'react'
import '../CSS/Business.css'
import Feeds from '../UI/Feeds'
import { motion } from 'framer-motion'

function Business() {
  return (
    <motion.div 
      className="Business"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className='feed-list'>
          <Feeds category='business'/>
      </div>
    </motion.div>
  )
}

export default Business