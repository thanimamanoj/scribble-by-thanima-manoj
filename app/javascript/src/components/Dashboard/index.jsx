import React, { useState, useEffect } from "react";

import { PageLoader } from "@bigbinary/neetoui/v2";

import articlesApi from "apis/articles";
import categoriesApi from "apis/categories";

import Main from "./Main";
import SideBar from "./SideBar";

import NavBar from "../NavBar";

const Dashboard = () => {
  const [categories, setCategories] = useState([]);
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [categoryLoading, setCategoryLoading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState();
  const [active, setActive] = useState("All");
  const [count, setCount] = useState([]);

  const fetchCategories = async () => {
    try {
      setCategoryLoading(true);
      const response = await categoriesApi.list();
      setCategories(response.data.categories);
      setCategoryLoading(false);
    } catch (error) {
      logger.error(error);
      setCategoryLoading(false);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchArticles = async () => {
    try {
      setLoading(true);
      const response = await articlesApi.list();
      setArticles(response.data.articles);
      setCount(response.data);
      setLoading(false);
    } catch (error) {
      logger.error(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  const deleteArticle = async id => {
    var answer = window.confirm("Are you sure you want to delete the article?");
    if (answer) {
      try {
        await articlesApi.destroy(id);
        await fetchArticles();
        await fetchCategories();
      } catch (error) {
        logger.error(error);
      }
    }
  };

  const handleAddCategory = async name => {
    try {
      await categoriesApi.create({ category: { name } });
      await fetchCategories();
    } catch (error) {
      logger.error(error);
    }
  };

  if (loading || categoryLoading) {
    return (
      <div className="w-screen h-screen">
        <PageLoader />
      </div>
    );
  }

  return (
    <div>
      <NavBar />
      <div className="flex">
        <SideBar
          categories={categories}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          active={active}
          setActive={setActive}
          count={count}
          handleAddCategory={handleAddCategory}
        />
        <div>
          <Main
            articles={articles}
            active={active}
            selectedCategory={selectedCategory}
            categories={categories}
            deleteArticle={deleteArticle}
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
