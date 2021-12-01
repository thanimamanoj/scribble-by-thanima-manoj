import React, { useState } from "react";

import { useLocation } from "react-router-dom";

import articlesApi from "apis/articles";
import Container from "components/Container";

import ArticleForm from "./Form/ArticleForm";

const CreateArticle = ({ history }) => {
  const categories = useLocation().state.categories;
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [status, setStatus] = useState("Draft");
  const [selectedCategory, setSelectedCategory] = useState();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async event => {
    event.preventDefault();
    setLoading(true);
    const category_id = selectedCategory?.id;
    try {
      await articlesApi.create({
        article: { title, category_id, body, status },
      });
      setLoading(false);
      history.push("/");
    } catch (error) {
      logger.error(error);
      setLoading(false);
    }
  };

  return (
    <Container>
      <ArticleForm
        setTitle={setTitle}
        status={status}
        setStatus={setStatus}
        setBody={setBody}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        categories={categories}
        loading={loading}
        handleSubmit={handleSubmit}
      />
    </Container>
  );
};

export default CreateArticle;
