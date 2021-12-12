import React, { useState, useEffect } from "react";

import { PageLoader } from "@bigbinary/neetoui/v2";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";

import articlesApi from "apis/articles";
import Container from "components/Container";

import ArticleForm from "./Form/ArticleForm";

const EditArticle = ({ history }) => {
  const categories = useLocation().state.categories;
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [status, setStatus] = useState("Draft");
  const [selectedCategory, setSelectedCategory] = useState();
  const [loading, setLoading] = useState(false);
  const [pageLoading, setPageLoading] = useState(true);
  const { id } = useParams();

  const handleSubmit = async event => {
    event.preventDefault();
    const category_id = selectedCategory?.id;
    try {
      await articlesApi.update({
        id,
        payload: { article: { title, category_id, body, status } },
      });
      setLoading(false);
      history.push("/");
    } catch (error) {
      setLoading(false);
      logger.error(error);
    }
  };

  const fetchArticleDetails = async () => {
    try {
      const response = await articlesApi.show(id);
      setTitle(response.data.article.title);
      setBody(response.data.article.body);
      setStatus(response.data.article.status);
      setSelectedCategory(response.data.article.category);
    } catch (error) {
      logger.error(error);
    } finally {
      setPageLoading(false);
    }
  };

  useEffect(() => {
    fetchArticleDetails();
  }, []);

  if (pageLoading) {
    return (
      <div className="w-screen h-screen">
        <PageLoader />
      </div>
    );
  }

  return (
    <Container>
      <ArticleForm
        title={title}
        setTitle={setTitle}
        status={status}
        setStatus={setStatus}
        body={body}
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

export default EditArticle;
