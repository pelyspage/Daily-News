import React from 'react';
import { useState, useEffect } from 'react';
import './Feeds.css';
import NewsCard from './NewsCard';

function Feeds({ category }) {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    console.log("category: ", category);
    const fetchArticles = async () => {

      const response = await fetch(
        import.meta.env.DEV
          ? `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_NEWS_API_KEY}`  // ← local development
          : `/api/news?category=${category}`  // ← production (Vercel)
      );

      const data = await response.json();
      if (data.articles) {
        setArticles(data.articles.filter(article => article.urlToImage));
      }
      console.log(data.articles);
    };

    fetchArticles();

  }, [category]);

  return (
    <div className="feed">
      {articles.map((article, index) => (
        <NewsCard
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