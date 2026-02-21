export default async function handler(req, res) {
  const { category } = req.query;

  const topHeadlineCategories = ['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology'];

  const url = topHeadlineCategories.includes(category)
    ? `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${process.env.VITE_NEWS_API_KEY}`
    : `https://newsapi.org/v2/everything?q=${category}&sortBy=publishedAt&apiKey=${process.env.VITE_NEWS_API_KEY}`;

  const response = await fetch(url);
  const data = await response.json();
  res.status(200).json(data);
}