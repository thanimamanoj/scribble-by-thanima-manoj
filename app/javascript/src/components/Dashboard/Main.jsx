import React, { useState, useEffect } from "react";

import Table from "./Articles/Table";

const Main = ({
  articles,
  active,
  selectedCategory,
  categories,
  deleteArticle,
}) => {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    selectedCategory
      ? active === "All"
        ? setTableData(
            articles.filter(({ category }) => category === selectedCategory)
          )
        : setTableData(
            articles
              .filter(({ status }) => status === active)
              .filter(({ category }) => category === selectedCategory)
          )
      : active === "All"
      ? setTableData(articles)
      : setTableData(articles.filter(({ status }) => status === active));
  }, [selectedCategory, active, articles]);

  return (
    <div>
      <Table
        articles={tableData}
        categories={categories}
        deleteArticle={deleteArticle}
      />
    </div>
  );
};

export default Main;
