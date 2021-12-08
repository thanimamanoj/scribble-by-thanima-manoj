import React, { useState, useEffect } from "react";

import { PageLoader } from "@bigbinary/neetoui/v2";
import { Switch, Route } from "react-router-dom";

import categoriesApi from "apis/categories";

import Article from "./Article";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Preview = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchContent = async () => {
    setLoading(true);
    try {
      const response = await categoriesApi.fetchCategory();
      setData(response.data.categories);
      setLoading(false);
    } catch (error) {
      logger.error(error);
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchContent();
  }, []);

  if (loading) {
    return <PageLoader />;
  }

  return (
    <div>
      <Header />
      <div className="w-full flex">
        <Sidebar data={data} />
        <Switch>
          <Route
            exact
            path={`/public/:slug`}
            component={() => <Article data={data} />}
          />
        </Switch>
      </div>
    </div>
  );
};

export default Preview;
