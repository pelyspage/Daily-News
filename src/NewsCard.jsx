import React from 'react'
import './Newscard.css'
import { useState } from 'react';
import { motion } from 'framer-motion'

function Newscard({ title, description, image, url, source, publishedAt }) {

    const [imgError, setImgError] = useState(false);

    if (imgError) return null;  // hides the whole card if image fails

  return (
    <motion.a 
      href={url} 
      target='_blank' 
      rel='noopener noreferrer' 
      className='news-card'
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
        <div className='card-image-wrapper'>
            <img 
                src={image} 
                alt={title} 
                className='card-image' 
                onError={() => setImgError(true)} 
            />
        </div>

        <div className='card-content'>
            <span className='card-source'>{source}</span>
            <h3 className="card-title">{title}</h3>
            <p className="card-description">{description}</p>
            <span className="card-date">{publishedAt}</span>
            <span className="card-readmore">Read more →</span>
        </div>
    </motion.a>
  )
}

export default Newscard