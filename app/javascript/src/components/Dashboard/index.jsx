import React, { useState, useEffect } from "react";

import { PageLoader } from "@bigbinary/neetoui/v2";

import categoriesApi from "apis/categories";

import SideBar from "./SideBar";

const Dashboard = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
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

  if (loading) {
    return (
      <div className="w-screen h-screen">
        <PageLoader />
      </div>
    );
  }

  // if (either(isNil, isEmpty)(tasks)) {
  //   return (
  //     <Container>
  //       <h1 className="text-xl leading-5 text-center">
  //         You have no tasks assigned 😔
  //       </h1>
  //     </Container>
  //   );
  // }

  return (
    <div>
      <SideBar categories={categories} />
    </div>
  );
};

export default Dashboard;
