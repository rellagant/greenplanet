// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";
// import "./Article.scss";

// export function Article() {
//     const { id } = useParams();
//     const [article, setArticle] = useState(null);
//     const [error, setError] = useState(null); // State to handle errors
  
//     useEffect(() => {
//       const fetchArticle = async () => {
//         try {
//           const response = await axios.get(`https://api.example.com/articles/${id}`);
//           setArticle(response.data);
//         } catch (error) {
//           console.error('Error fetching article:', error);
//           setError('Failed to load the article. Please try again later.');
//         }
//       };
  
//       fetchArticle();
//     }, [id]);
  
//     if (error) {
//       return <div className="error-message">{error}</div>; // Display error message
//     }
  
//     if (!article) {
//       return <div>Loading...</div>; // Display loading state
//     }
  
//     return (
//       <div className="article-container">
//         <h1 className="article-title">{article.title}</h1>
//         <p className="article-body">{article.body}</p>
//       </div>
//     );
//   }


