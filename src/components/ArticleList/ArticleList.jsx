import { useEffect, useState } from "react";
import axios from "axios";
import "./ArticleList.scss";
import { Link } from 'react-router-dom';

function ArticleList() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get('http://localhost:1337/api/articles', {
            params: {
              populate: 'photo',
            },
          });
        console.log("Response:", response.data);
        setArticles(response.data.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!articles || articles.length === 0) return <div>No articles found.</div>;

  return (
    <div className="article">
      <h2 className="article-title">
        Insights Trends and Tips from Industry Experts
      </h2>
      <div className="article-container">
        {articles.map((article) => (
          <div key={article.id} className="article-card">
            <h2 className="article-card__title">{article.title}</h2>
            <p className="article-card__author">By: {article.author}</p>
            {article.photo?.url ? (
            <img className="article-card__photo"
              src={`http://localhost:1337${article.photo.url}`}
              alt={article.title}
            />
          ) : (
            <p className="article-card__photo-placeholder">No photo available</p>
            )}
           <Link to={`/article/${article.id}`} className="article-card__btn">
            Read More
          </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ArticleList;
