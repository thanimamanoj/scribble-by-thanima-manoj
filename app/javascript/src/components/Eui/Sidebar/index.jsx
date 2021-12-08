import React, { useState, useEffect } from "react";

import { PageLoader } from "@bigbinary/neetoui/v2";

import categoriesApi from "apis/categories";

import Submenu from "./Submenu";

const Sidebar = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchContent = async () => {
    try {
      setLoading(true);
      const response = await categoriesApi.list();
      setData(response.data.categories);
      setLoading(false);
    } catch (error) {
      logger.error(error);
      setLoading(false);
    }
  };
  useEffect(() => fetchContent(), []);

  if (loading) {
    return <PageLoader />;
  }

  return (
    <div className="h-screen w-1/3 border ">
      <ul className=" pt-6">
        {data.map((item, index) => (
          <Submenu key={index} item={item} />
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
