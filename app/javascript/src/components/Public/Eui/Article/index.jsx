import React, { useState, useEffect } from "react";

import { useParams } from "react-router-dom";

import Show from "./Show";

const Article = ({ data }) => {
  const [article, setArticle] = useState([]);
  const { slug } = useParams();

  const fetchArticle = articleList => {
    const show_article = articleList.filter(article => article.slug === slug);
    setArticle(show_article[0]);
  };

  const fetchArticleList = () => {
    const articleList = data.reduce((articles, category) => {
      const newArticles = category.articles.map(article => ({
        ...article,
        category: category.name,
      }));
      return [...articles, ...newArticles];
    }, []);
    fetchArticle(articleList);
  };
  useEffect(() => {
    fetchArticleList();
  }, []);

  return <Show article={article} />;
};

export default Article;
