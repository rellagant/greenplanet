import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./Article.scss";

export default function Article() {
  const { documentId } = useParams();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await axios.get(
          `http://localhost:1337/api/articles/${documentId}`
        );
        console.log("API Response:", response.data);
        setArticle(response.data.data);
      } catch (error) {
        console.error("Error fetching article:", error);
        setError("Failed to load the article. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    if (documentId) {
      fetchArticle();
    }
  }, [documentId]);

  if (!documentId) {
    return <div>Loading document ID...</div>;
  }

  if (loading) {
    return <div>Loading article...</div>;
  }

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  if (!article) {
    return <div>No article found.</div>;
  }

  return (
    <div className="article-page">
      <h1>{article.title}</h1>
      {article.content.map((block, index) => (
        <div key={`block-${index}`}>
          {block.children.map((child, childIndex) => (
            <p key={`child-${index}-${childIndex}`}>{child.text}</p>
          ))}
        </div>
      ))}
    </div>
  );
}

