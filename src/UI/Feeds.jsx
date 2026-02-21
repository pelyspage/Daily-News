import React from 'react';
import { useState, useEffect } from 'react';
import './Feeds.css';
import Newscard from './Newscard';

function Feeds({ category }) {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    console.log("category: ", category);
    const fetchArticles = async () => {
      const response = await fetch(`/api/news?category=${category}`);
      const data = await response.json();
      setArticles(data.articles.filter(article => article.urlToImage));
      console.log(data.articles);
    };

    fetchArticles();

  }, [category]);

  return (
    <div className="feed">
      {articles.map((article, index) => (
        <Newscard
          key={index}
          title={article.title}
          image={article.urlToImage}
          description={article.description}
          url={article.url}
        />
      ))}
    </div>
  );
}

export default Feeds;