import React, { useState, useEffect } from "react";

import { PageLoader } from "@bigbinary/neetoui/v2";

import categoriesApi from "apis/categories";

import CategoryList from "./CategoryList";

const ManageCategories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [addCategory, setAddCategory] = useState(false);

  const fetchCategories = async () => {
    try {
      setLoading(true);
      const response = await categoriesApi.list();
      setCategories(response.data.categories);
      setLoading(false);
    } catch (error) {
      logger.error(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleAdd = async name => {
    setAddCategory(false);
    try {
      await categoriesApi.create({ category: { name } });
      await fetchCategories();
      setLoading(false);
    } catch (error) {
      logger.error(error);
      setLoading(false);
    }
  };
  if (loading) {
    return <PageLoader />;
  }

  return (
    <div className=" mx-auto mt-6">
      <CategoryList
        categories={categories}
        handleAdd={handleAdd}
        addCategory={addCategory}
        setAddCategory={setAddCategory}
        fetchCategories={fetchCategories}
      />
    </div>
  );
};

export default ManageCategories;
