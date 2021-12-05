import React, { useState, useEffect } from "react";

import { PageLoader } from "@bigbinary/neetoui/v2";

import categoriesApi from "apis/categories";

import CategoryList from "./CategoryList";

const ManageCategories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [addCategory, setAddCategory] = useState(false);
  const [editCategory, setEditCategory] = useState(0);

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

  const handleDelete = async id => {
    try {
      await categoriesApi.destroy(id);
      await fetchCategories();
    } catch (error) {
      logger.error(error);
    }
  };

  const handleEdit = async (id, name) => {
    setEditCategory(true);
    try {
      await categoriesApi.update({
        id,
        payload: { category: { name } },
      });
      await fetchCategories();
    } catch (error) {
      logger.error(error);
    }
  };

  const handleAdd = async name => {
    setAddCategory(false);
    try {
      await categoriesApi.create({ category: { name } });
      setLoading(false);
      window.location.reload();
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
        handleDelete={handleDelete}
        handleEdit={handleEdit}
        addCategory={addCategory}
        setAddCategory={setAddCategory}
        editCategory={editCategory}
        setEditCategory={setEditCategory}
      />
    </div>
  );
};

export default ManageCategories;
