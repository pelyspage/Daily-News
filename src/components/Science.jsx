import React from 'react'
import Feeds from '../UI/Feeds'
import '../CSS/Science.css'
import { motion } from 'framer-motion'

function Science() {
  return (
    <motion.div 
      className="Science"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
        <div className='feed-list'>
          <Feeds category='science'/>
      </div>
    </motion.div>
  )
}

export default Science