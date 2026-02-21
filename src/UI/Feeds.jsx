import React from 'react';
import { useState, useEffect } from 'react';
import './Feeds.css';
import Newscard from './Newscard';

function Feeds({ category }) {
  const [articles, setArticles] = useState([]);

    useEffect(() => {
        console.log("category: ", category);
        const fetchArticles = async () => {

        const topHeadlineCategories = ['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology'];

        const url = topHeadlineCategories.includes(category)
            ? `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_NEWS_API_KEY}`
            : `https://newsapi.org/v2/everything?q=${category}&sortBy=publishedAt&apiKey=${import.meta.env.VITE_NEWS_API_KEY}`;

        const response = await fetch(url);
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