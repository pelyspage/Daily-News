import React from 'react'
import '../CSS/Home.css'
import Landingpage from './Landingpage'
import Feeds from '../UI/Feeds'
import { useState } from 'react';

function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [submittedQuery, setSubmittedQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setSubmittedQuery(searchQuery);
      window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top when search is submitted
    }
  };

  return (
    <div className="Home">
      <Landingpage />

      {/* Search bar */}
      <div className='search-feed'>
        <input
          type="text"
          placeholder='Search news...'
          className='search-bar'
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
        />
        <button className='search-button' onClick={handleSearch}>Search</button>
      </div>

      {/* Search results - only shows when user searches */}
      {submittedQuery && (
        <div className='search-results'>
          <h3>Results for: "{submittedQuery}"</h3>
          <Feeds category={submittedQuery} />
        </div>
      )}

      {/* Normal feeds always stay visible */}
      <div className='news-feeds'>
        <Feeds category='general' />
      </div>

    </div>
  );
}


export default Home