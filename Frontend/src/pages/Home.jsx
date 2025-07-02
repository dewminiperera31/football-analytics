import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/Home.css';
import banner from '../assets/football-banner.jpg';

function Home() {
  const [news, setNews] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const fetchNews = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://newsapi.org/v2/everything?q=Football  &language=en&language=en&pageSize=10&page=${page}&sortBy=publishedAt&apiKey=8424ff682d174b2fa562b99130b2582c`
      );
      setNews((prevNews) => [...prevNews, ...response.data.articles]);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching news:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews();
  }, [page]);

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <div className="home-container">
      {/* Banner Image */}
      <img src={banner} alt="Football Banner" className="home-banner" />

      {/* Welcome Text */}
      <div className="home-intro">
        <h1>Welcome to Football Analytics</h1>
        <p>Track real-time football insights, scores, and player data.</p>
      </div>

      {/* Feature Grid */}
      <div className="feature-grid">
        <div className="feature-card">
          <img src="https://cdn-icons-png.flaticon.com/512/861/861512.png" alt="Match" />
          <h3>Live Matches</h3>
        </div>
        <div className="feature-card">
          <img src="https://cdn-icons-png.flaticon.com/512/3068/3068774.png" alt="Teams" />
          <h3>Teams</h3>
        </div>
        <div className="feature-card">
          <img src="https://cdn-icons-png.flaticon.com/512/616/616408.png" alt="Players" />
          <h3>Players</h3>
        </div>
      </div>

      {/* Latest Football News Section */}
      <div className="latest-news">
        <h2>Latest Football News</h2>
        {news.length === 0 ? (
          <p>Loading news...</p>
        ) : (
          <div className="news-grid">
            {news.map((article, index) => (
              <div className="news-card" key={index}>
                <img
                  src={article.urlToImage || 'https://via.placeholder.com/400x200?text=No+Image'}
                  alt="news"
                  className="news-image"
                />
                <div className="news-content">
                  <a
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="news-title"
                  >
                    {article.title}
                  </a>
                  <p className="news-date">
                    {new Date(article.publishedAt).toLocaleDateString()}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Load More Button */}
        <div className="load-more-container">
          <button onClick={handleLoadMore} className="load-more-btn" disabled={loading}>
            {loading ? 'Loading...' : 'Load More'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
